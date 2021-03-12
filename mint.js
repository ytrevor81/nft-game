import TrevNFT from './build/contracts/TrevNFT.json';
import Web3 from 'web3';
const config = require('./config.json')

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io"));

const trevNft = new web3.eth.Contract(TrevNFT.abi, TrevNFT.networks[netId].address);

trevNft.methods.mintNft({ receiver: "0xC0Ed442435C0564Ea42405ceEf9E167A73c756C9", tokenURI: config.METADATA })
