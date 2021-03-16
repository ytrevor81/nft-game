const Flareon = artifacts.require("NonFungibleFlareon");
const config = require('../config.json');

module.exports = async function(deployer) {
  await deployer.deploy(Flareon);
  const nft = await Flareon.deployed();
  await nft.mintNft(config.RINKEBY_ADDRESS, config.FLAREON_METADATA);
  //await nft.mintNft("0x60dE7547089bD529c7d04E6D0c6A73E99939105f", config.FLAREON_METADATA); //Ganache address
};
