# Rather Labs Challenge

  

#### The DAO
A DAO is a type of organization that is governed by smart contracts, which
are self-executing computer programs that automatically enforce the rules
of the organization.
Members of the DAO can vote on proposals and decisions using their DAO
tokens, and the smart contracts automatically execute the decisions based
on the results of the vote.
Essentially, a DAO is a decentralized organization that operates on a
blockchain using smart contracts to facilitate decision-making and enforce
rules.

#### Bare Minimum Requirements
In this case, you are tasked with developing a full-stack solution for a DAO
that seeks to allow its token holders (ERC20) to vote on proposals generated
by an admin on how to operate the organization
- A single, or a set of smart-contracts to support the DAO.
- A command-line script that allows the admin create a new proposal
on-chain with the following fields: Title, description, proposal
deadline, minimum votes, option A and option B, and any other you
deemed necessary.
- A backend module that when spun up, syncs up with all proposals to
date, and serves all necessary information about such proposals
through a REST API
- A frontend application
- Lists all proposals and their status (pending, closed, finished,
option A won, option B won, etc)
- Allows to vote option A or option B

# Project Instructions

## Smart Contracts

The smart contracts are already deployed on the Goerli testnet of Ethereum.

    DAO contract address: 0x1a4f72422eE5eCB345BB37a8c202CdAd7Fa39d66
	RatherToken address: 0x2EC450905EeeBf56Cf35078A837A3D3BE5DdDDA4

To deploy the smart contracts, follow these steps:

1. Create a file named `.secret` inside the `/smartcontracts` directory, containing the mnemonic of the account used to pay for the deployment gas.
2. Run the following commands for deployment:

    ```bash
    truffle compile
    truffle migrate --network goerli
    ```

## Backend

The challenge is set up to run in a local environment, consuming the contracts already deployed on the Goerli testnet. To initialize the backend, execute the following commands:

1. Navigate to the `/proposals-api` directory.
2. Run the following commands:

    ```bash
    npm i
    npm run dev
    ```

The backend exposes a GET endpoint `/proposals` that returns the list of proposals from the DAO contract.

## Frontend

To initialize the frontend, execute the following commands:

1. Navigate to the `/proposals-ui` directory.
2. Run the following commands:

    ```bash
    npm i
    npm start
    ```

### Admin Scripts

In the `/admin` directory, there are two scripts: one for creating proposals and another for transferring tokens. To use them, follow these steps:

1. Create a file named `.secret` inside the `/admin` directory, containing the private key of the account used to deploy the smart contracts. This account is the only one allowed to transfer tokens and create proposals.
2. Run the following command to create a proposal:

    ```bash
    node createProposal.js "Proposal Title" "Proposal Description" "Option A" "Option B" 3600 10
    ```

    Parameters are in the following order: title, description, option A, option B, duration in seconds, minimum votes.

Examples:

```bash
node createProposal.js "First proposal as an example" "This is the first proposal" "Option A" "Option B" 3600 10
node createProposal.js "Should we allow people without tokens to vote?" "This is the second proposal" "Yes" "No" 3600 5
node createProposal.js "Minimum votes should always be at least 10?" "This is the third proposal" "Yes" "No" 3600 10```

## Additional Notes
Features pending in the frontend:
- Allow admin to finish a proposal
- Allow admin to switch a proposal state between Pending and Closed

The contract is already prepared for an admin to finish a proposal and also switch a proposal state between Pending and Closed. It’s pending to allow those functionalities on the UI.