const TrevNFTFinal = artifacts.require("TrevNFTFinal");
const config = require('../config.json');

module.exports = async function(deployer) {
  await deployer.deploy(TrevNFTFinal);
  const trevNft = await TrevNFTFinal.deployed();
  await trevNft.mintNft(config.RINKEBY_ADDRESS, config.METADATA);
  //await trevNft.mintNft("0x3454000e91eb384f6F113A9F11ec41CD94CeF4f1", config.METADATA); //Ganache address
};
