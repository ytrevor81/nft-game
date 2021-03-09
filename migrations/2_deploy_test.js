const NFTTest = artifacts.require("NFTTest");

module.exports = async function(deployer){
  await deployer.deploy(NFTTest);
};
