require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad gloom clip bottom shrimp'; 
let testAccounts = [
"0x282dc7ed578bde1bcfc8e6768fa0bf597d8cda66019a2aa4cfc6f913bda892a9",
"0xaa65e02b8f3c3ab8b31acb51b5e18dcb5c59a89b9fc418f404f361330502d6e8",
"0x7343ad44c6de5d37985ed21cabbe265d5dc150259ffaef21b89f93edad05d96e",
"0xe679787652c40118da170468ad1172861ce571c00578a3199702ac5588e3cada",
"0x3e934211a2ad08564abf06ae640d01d4f67302cf10e44af197682d9d7faad09f",
"0x7ed44c8d00d36c7dda4e492061e89c5c1df9925e4e9e3007329b215c9421e3f8",
"0x71f188837de7c830fe86075191e012931019c6c293ff668ab5121aa18699aa27",
"0xe213b24506c1c383ba2957f57334c1c55e4240801f16c521461db3c7383c5384",
"0x97cb43c79d342c01156ca12ff2814af4d3a4e7cb63c069d3bea41e1c13ce3fd0",
"0x694db4c392f29d7fca59193cbc0a3a1eb993363c1d8cb4185ee413e19af03c95"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
