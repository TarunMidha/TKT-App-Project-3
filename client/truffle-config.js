module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache GUI default port
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.8.1", // Match the Solidity version in your smart contract
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
