const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const productsService = require('../../../services/productsService');

chai.use(chaiAsPromised);

describe('services/productsService', () => {
  beforeEach(sinon.restore)

  describe('list', () => {
    it('throws error if model throws error', () => {
      sinon.stub(productsModel, 'list').rejects();
      chai.expect(productsService.list()).to.eventually.be.rejected;
    });

    it('throws error if model doesnt return an array', () => {
      sinon.stub(productsModel, 'list').resolves({});
      chai.expect(productsService.list()).to.eventually.be.rejected;
    });

    it('returns array of objects if successful', () => {
      const result = [
        {
          id: 1,
          name: "Martelo de Thor",
        },
        {
          id: 2,
          name: "Traje de encolhimento",
        },
        {
          id: 3,
          name: "Escudo do Capitão América",
        },
      ]
      sinon.stub(productsModel, 'list').resolves(result);
      chai.expect(productsService.list()).to.eventually.equal(result);
    });
  });
});