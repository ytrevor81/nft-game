const NonFungibleFlareon = artifacts.require("NonFungibleFlareon")
const config = require('../config.json')

contract('NonFungibleFlareon', function(accounts) {
  var tokenInstance;

  it('Contract deployed', function() {
    return NonFungibleFlareon.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.tokenURI(1)
    }).then(function(uri) {
      assert.equal(uri, config.FLAREON_METADATA, "correct uri");
      return tokenInstance.ownerOf(1);
    }).then(function(address) {
      assert.equal(address, "0x361eccb8E577800Aa2d60994773dE975E28a68CE", "correct owner"); //Ganache address
    });
  });
});
