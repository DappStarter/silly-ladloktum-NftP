require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strategy cost museum mistake hidden photo forget gate'; 
let testAccounts = [
"0xd4a02aab3ab4856e32951c13b0359df67922909fdae59a92d4d8f1d7d5b849b4",
"0xfd08f257bec05bbd42703f5294a3a4f64369a45e1bff354f4708e9c88aec6396",
"0x62b1b3a7bee3837ba9b97c7e7c9b35574133540c62fba88fd93d5b7aaf713aee",
"0x6e4b9b0b792db81d27aac5e02c150f5021bd3553e2125d500309c58afacf0ea3",
"0x19163c1d34eca09539c2cceba2413c09cdb1b93052a9c0d445af11c6fae1f2c6",
"0xa68de0cc21fa869d529b21819c8447a947877d1627c72dbea683f3dc535d33ca",
"0xfc83e0df7c88b9c50dd23f722c63b9c779003222b1334ba0b03b1b0fc5583848",
"0x934362f9cdeed28574f4db0dde2f7ad0a1b890e3913b52a8b84a0252e1b496fb",
"0xaf274d4ece66cd3e45f582e9d08cab1e3181c240f7832dddaeac36972b993f5e",
"0x72baa88f9814e3d0aad69c89c0ee9f8ab1c0b5ee5165ec3b734ec498ef034990"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

