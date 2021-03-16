const TrevNFT = artifacts.require("TrevNFT")
const NonFungibleFlareon = artifacts.require("NonFungibleFlareon")
const TestHeracross = artifacts.require("TestHeracross")
const config = require('../config.json')

contract('TrevNFT', function(accounts) {
  var tokenInstance;

  it('Contract deployed', function() {
    return TrevNFT.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.tokenURI(1)
    }).then(function(uri) {
      assert.equal(uri, config.METADATA, "correct uri");
      return tokenInstance.ownerOf(1);
    }).then(function(address) {
      assert.equal(address, "0x60dE7547089bD529c7d04E6D0c6A73E99939105f", "correct owner"); //Ganache address
    });
  });
});

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
      assert.equal(address, "0x60dE7547089bD529c7d04E6D0c6A73E99939105f", "correct owner"); //Ganache address
    });
  });
});

contract('TestHeracross', function(accounts) {
  var tokenInstance;

  it('Contract deployed', function() {
    return TestHeracross.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.tokenURI(1)
    }).then(function(uri) {
      assert.equal(uri, config.HERACROSS_METADATA, "correct uri");
      return tokenInstance.ownerOf(1);
    }).then(function(address) {
      assert.equal(address, "0x60dE7547089bD529c7d04E6D0c6A73E99939105f", "correct owner"); //Ganache address
    });
  });
});
