const mnemonic = require('./secret/mnemonic').mnemonic;
const infura = require('./secret/infura').key;
const HDWalletProvider = require("truffle-hdwallet-provider");
const PrivateKeyProvider = require("truffle-privatekey-provider");


const key = '**************************'
module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 7545,
            gas: 4700000,
            gasPrice: 65000000000,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: function () {
                return new PrivateKeyProvider(key, `https://ropsten.infura.io/${infura}`)
            },
            gas: 4612388,
            gasPrice: 65000000000,
            network_id: 3
        },
        mainnet: {
            provider: function () {
                return new PrivateKeyProvider(key, `https://mainnet.infura.io/${infura}`)
            },
            gas: 4699999,
            gasPrice: 20000000000,
            network_id: "*"
        }
    } ,
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};