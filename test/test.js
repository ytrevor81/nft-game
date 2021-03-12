const TrevNFTFinal = artifacts.require("TrevNFTFinal")
const config = require('../config.json')

contract('TrevNFTFinal', function(accounts) {
  var tokenInstance;
  var tokenId;
  var json;

  it('Contract deployed', function() {
    return TrevNFTFinal.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.mintNft("0x3454000e91eb384f6F113A9F11ec41CD94CeF4f1", config.METADATA)
    }).then(function(receipt) {
      const tokenId = receipt.logs[0].args.tokenId;
      assert.equal(tokenId, 1, "minted");
      return tokenInstance.tokenURI(tokenId)
    }).then(function(uri) {
      assert.equal(uri, config.METADATA, "correct uri");
    });
  });

});
