const express = require('express');
require('express-async-errors');
const productsRoute = require('./routes/productsRoute');

const app = express();
app.use(express.json());

app.use('/products', productsRoute);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'NotFound': res.status(404).json({ message });
      break;
    case 'ValidationError':
      if (message.includes('length')) return res.status(422).json({ message });
      if (message.includes('required')) return res.status(400).json({ message });
      break;
    default: console.warn(err); res.sendStatus(500);
  }
});

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;