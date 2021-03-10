const TrevNFT = artifacts.require("TrevNFT")
const config = require('../config.json')

contract('TrevNFT', function(accounts) {
  var tokenInstance;
  var tokenId;
  var json;

  it('Contract deployed', function() {
    return TrevNFT.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, "Trev NFT", "has the correct name");
    });
  });

  it('applying URI', function() {
    return TrevNFT.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.mintNft(accounts[0], config.METADATA);
    }).then(function(receipt) {
      tokenId = receipt.logs[0].args.tokenId;
      assert.equal(tokenId, 1, "function was called");
      return tokenInstance.tokenURI(tokenId);
    }).then(function(jsonURI) {
      json = jsonURI;
      assert.equal(json.toString(), config.METADATA, "has the correct NFT URI");
      return tokenInstance.ownerOf(tokenId);
    }).then(function(address) {
      assert.equal(address, accounts[0], "correct address");
    })
  });

});
