const TrevNFTFinal = artifacts.require("TrevNFTFinal");
const config = require('../config.json');

module.exports = function(deployer) {
  deployer.deploy(TrevNFTFinal);
  //const trevNft = TrevNFTFinal.deployed();
  //trevNft.mintNft("0x3454000e91eb384f6F113A9F11ec41CD94CeF4f1", config.METADATA);
};
