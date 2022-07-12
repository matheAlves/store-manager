const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");
const productsController = require("../../../controllers/productsController");
const productsService = require("../../../services/productsService");

chai.use(chaiAsPromised);

describe('controllers/productController', () => {
  beforeEach(sinon.restore);

  describe('listAll', () => {
    it('throws error if service throws error', () => {
      sinon.stub(productsService, 'list').rejects();
      chai.expect(productsController.listAll()).to.eventually.be.rejected;
    })
  })
})