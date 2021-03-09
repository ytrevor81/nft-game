pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTTest is ERC721 {

  constructor() public payable ERC721("NFT Test", "NTT"){
  }
}
