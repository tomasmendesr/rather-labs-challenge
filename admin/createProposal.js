const { Web3 } = require('web3');
const fs = require('fs');

const web3Provider = 'https://goerli.infura.io/v3/401b77306e0843f3976330f8b1444dd3';
const web3 = new Web3(web3Provider);

const privateKey = fs.readFileSync(".secret").toString().trim();
const contractABI = JSON.parse(fs.readFileSync('DAOabi.json', 'utf-8'));
const contractAddress = '0x1a4f72422eE5eCB345BB37a8c202CdAd7Fa39d66';

const args = process.argv.slice(2);

if (args.length !== 6) {
    console.error('Error: Title, description, option A, option B, duration in seconds and min votes are required arguments');
    process.exit(1);
}

const title = args[0];
const description = args[1];
const optionA = args[2];
const optionB = args[3];
const durationInSeconds = parseInt(args[4]);
const minVotes = parseInt(args[5]);

if (!isValidDuration(durationInSeconds) || !isValidMinVotes(minVotes)) {
    console.error('Error: Duration or min votes are not valid');
    process.exit(1);
}

const proposalDeadline = getProposalDeadlineInSeconds(durationInSeconds);

const contract = new web3.eth.Contract(contractABI, contractAddress);
const PUBLIC_KEY = '0xED9feF38894a86033253084C1bc39317AcD6ba13';

const createProposalTransaction = contract.methods.createProposal(title, description, optionA, optionB, proposalDeadline, minVotes);
const data = createProposalTransaction.encodeABI();

web3.eth.getGasPrice().then(async (gasPrice) => {
    const gasLimit = 500000; // Establece un límite de gas razonable

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'pending');
    const tx = {
        to: contractAddress,
        gas: web3.utils.toHex(gasLimit),
        gasPrice: web3.utils.toHex(gasPrice),
        data,
        nonce: web3.utils.toHex(nonce)
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
})
.then((receipt) => {
    console.log('Proposal created successfully:', receipt);
})
.catch((err) => {
    console.error('Error creating proposal:', err);
});

function isValidDuration(duration) {
    return Number.isInteger(duration) && duration > 0;
}

function isValidMinVotes(votes) {
    return Number.isInteger(votes) && votes > 0;
}

function getProposalDeadlineInSeconds(durationInSeconds) {
    const currentTimestampInSeconds = Math.floor(Date.now() / 1000);
    return currentTimestampInSeconds + durationInSeconds;
}
