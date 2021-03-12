const TrevNFTFinal = artifacts.require("TrevNFTFinal")
const config = require('../config.json')

contract('TrevNFTFinal', function(accounts) {
  var tokenInstance;
  var tokenId;
  var json;

  it('Contract deployed', function() {
    return TrevNFTFinal.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.tokenURI(1)
    }).then(function(uri) {
      assert.equal(uri, config.METADATA, "correct uri");
      return tokenInstance.ownerOf(1);
    }).then(function(address) {
      assert.equal(address, "0x3454000e91eb384f6F113A9F11ec41CD94CeF4f1", "correct owner"); //Ganache address
    });
  });

});
