const Web3 = require('web3');
const fs = require('fs');

const rpcURL = 'https://goerli.infura.io/v3/401b77306e0843f3976330f8b1444dd3';
const web3 = new Web3(rpcURL);

const privateKey = fs.readFileSync(".secret").toString().trim();
const contractABI = JSON.parse(fs.readFileSync('DAOabi.json', 'utf-8'));
const contractAddress = '0xcb79bBE40BB3819f25ba69E71BA21aE2dBc16161';

const args = process.argv.slice(2);

if (args.length !== 5) {
    console.error('Error: Title, description, duration in seconds and min votes are required arguments');
    process.exit(1);
}

const title = args[0];
const description = args[1];
const durationInSeconds = parseInt(args[2]);
const minVotes = parseInt(args[3]);

if (!isValidDuration(durationInSeconds) || !isValidMinVotes(minVotes)) {
    console.error('Error: Duration or min votes are not valid');
    process.exit(1);
}

const proposalDeadline = getProposalDeadlineInSeconds(durationInSeconds);

const contract = new web3.eth.Contract(contractABI, contractAddress);
const PUBLIC_KEY = '0xED9feF38894a86033253084C1bc39317AcD6ba13';

const createProposalTransaction = contract.methods.createProposal(title, description, proposalDeadline, minVotes);
const data = createProposalTransaction.encodeABI();

web3.eth.estimateGas({
    from: PUBLIC_KEY,
    to: contractAddress,
    data
})
.then((estimatedGas) => {
    return web3.eth.accounts.signTransaction({
        to: contractAddress,
        data,
        gas: web3.utils.toHex(estimatedGas)
    }, privateKey);
})
.then((signedTx) => {
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
