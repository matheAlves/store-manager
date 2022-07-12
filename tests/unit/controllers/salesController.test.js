const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");
const salesController = require("../../../controllers/salesController");
const salesService = require("../../../services/salesService");

chai.use(chaiAsPromised);

describe('controllers/salesController', () => {
  beforeEach(sinon.restore);

  describe('list', () => {
    it('throws error if service throws error', () => {
      sinon.stub(salesService, 'list').rejects();
      chai.expect(salesController.list()).to.eventually.be.rejected;
    })
  })
})