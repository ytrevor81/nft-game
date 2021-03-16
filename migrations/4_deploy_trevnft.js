const TrevNFT = artifacts.require("TrevNFT");
const config = require('../config.json');

module.exports = async function(deployer) {
  await deployer.deploy(TrevNFT);
  const nft = await TrevNFT.deployed();
  await nft.mintNft(config.RINKEBY_ADDRESS, config.METADATA);
  //await nft.mintNft("0x60dE7547089bD529c7d04E6D0c6A73E99939105f", config.METADATA); //Ganache address
};
