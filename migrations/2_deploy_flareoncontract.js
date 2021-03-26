const Flareon = artifacts.require("NonFungibleFlareon");
const config = require('../config.json');

module.exports = async function(deployer) {
  await deployer.deploy(Flareon);
  const nft = await Flareon.deployed();
  //await nft.mintNft(config.RINKEBY_ADDRESS, config.FLAREON_METADATA);
  await nft.mintNft("0x361eccb8E577800Aa2d60994773dE975E28a68CE", config.FLAREON_METADATA); //Ganache address
};
