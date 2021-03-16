const Heracross = artifacts.require("TestHeracross");
const config = require('../config.json');

module.exports = async function(deployer) {
  await deployer.deploy(Heracross);
  const nft = await Heracross.deployed();
  await nft.mintNft(config.RINKEBY_ADDRESS, config.HERACROSS_METADATA);
  //await nft.mintNft("0x60dE7547089bD529c7d04E6D0c6A73E99939105f", config.HERACROSS_METADATA); //Ganache address
};
