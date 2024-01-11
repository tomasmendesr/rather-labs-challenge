const { Web3 } = require('web3');
const fs = require('fs');

const web3Provider = 'https://goerli.infura.io/v3/401b77306e0843f3976330f8b1444dd3';
const web3 = new Web3(web3Provider);

const privateKey = fs.readFileSync(".secret").toString().trim();
const contractABI = JSON.parse(fs.readFileSync('tokenABI.json', 'utf-8'));
const contractAddress = '0x2EC450905EeeBf56Cf35078A837A3D3BE5DdDDA4';

const contract = new web3.eth.Contract(contractABI, contractAddress);
const receiverAddress = '0xED9feF38894a86033253084C1bc39317AcD6ba13';

const transferTokens = async () => {
    web3.eth.getGasPrice().then(async (gasPrice) => {
        const gasLimit = 500000;
        const amount = web3.utils.toWei('1', 'ether'); // Cantidad de tokens a transferir

        const nonce = await web3.eth.getTransactionCount(receiverAddress, 'pending');
        const txParams = {
            nonce: web3.utils.toHex(nonce),
            gasLimit: web3.utils.toHex(gasLimit),
            gasPrice: web3.utils.toHex(gasPrice),
            to: contractAddress,
            data: contract.methods.transfer(receiverAddress, amount).encodeABI(),
        };

        const signedTx = await web3.eth.accounts.signTransaction(txParams, privateKey);
        return await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        })
    .then((receipt) => {
        console.log('transfered successfully:', receipt);
    })
    .catch((err) => {
        console.error('Error transfering:', err);
    });
  };
  
  transferTokens();