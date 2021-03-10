require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const config = require('./config.json')

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','),
          `https://rinkeby.infura.io/v3/${config.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000,
      network_id: 4
    },
  },
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
}
