const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const salesService = require('../../../services/salesService');

chai.use(chaiAsPromised);

describe('services/productsService', () => {
  beforeEach(sinon.restore)

  describe('checkExists', () => {
    it('throws error if model throws error', () => {
      sinon.stub(productsModel, 'list').rejects();
      chai.expect(salesService.checkExists(1)).to.eventually.be.rejected;
    });
  });
});