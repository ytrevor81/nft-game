module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
  main: {
    provider: function() {
      return new HDWalletProvider(
        privateKeys.split(','),
        `https://main.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
      )
    },
    gas: 5000000,
    gasPrice: 5000000000,
    network_id: 42
  },
  rinkeby: {
    provider: function() {
      return new HDWalletProvider(
        privateKeys.split(','),
        `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
    gas: 5000000,
    gasPrice: 5000000000,
    network_id: 4
    }
  },
  contracts_directory: './contracts/',
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
