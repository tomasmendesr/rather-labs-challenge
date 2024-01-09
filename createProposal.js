const Web3 = require('web3');
const fs = require('fs');

const rpcURL = 'https://goerli.infura.io/v3/401b77306e0843f3976330f8b1444dd3'
const web3 = new Web3(rpcURL);

const privateKey = fs.readFileSync(".secret").toString().trim();
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);

const abi = JSON.parse(fs.readFileSync('DAOabi.json', 'utf-8'));
const contractAddress = 'tu_direccion_del_contrato'; // Reemplaza con la dirección del contrato DAO

const daoContract = new web3.eth.Contract(abi, contractAddress);

// Función para crear una nueva propuesta
async function createProposal(title, description, deadline, minVotes, optionA, optionB) {
  try {
    const result = await daoContract.methods.createProposal(
      title,
      description,
      deadline,
      minVotes,
      optionA,
      optionB
    ).send({ from: account.address });
    console.log('Proposal created:', result);
  } catch (error) {
    console.error('Error creating the proposal:', error);
  }
}

createProposal(
  'Titulo de la Propuesta',
  'Descripción detallada de la propuesta',
  Math.floor(Date.now() / 1000) + 3600, // Ejemplo de plazo de 1 hora en el futuro
  10, // Ejemplo de votos mínimos
  'Opción A',
  'Opción B'
);
