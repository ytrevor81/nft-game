const NFTTest = artifacts.require('NFTTest');

contract('NFTTest', () => {
  it('Contract deployed', async () => {
    const nftTest = await NFTTest.deployed();
    assert(nftTest.address != '');
  });
});
