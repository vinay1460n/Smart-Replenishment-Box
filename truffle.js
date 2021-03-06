// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    staging: {
      host: "localhost",
      port: 8546,
      network_id: 1337
    },
    ropsten: {
      host: "10.223.116.60",
      port: 8545,
      network_id: "*"
    }
  }
};
