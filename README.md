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

⚠️ **Disclaimer:**
The application is integrated with [Metamask](https://metamask.io/). Please make sure to have the Metamask browser extension installed to use its functionalities and participate in voting.

![Metamask Logo](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABU1BMVEX////2hRt2PRbkdhvNYRbArZ4WFhbXwbPkdR/ldxsjNEf2hBb3jDD5hxu9qZkAAAZrNxbq5OCBdWvxgRziaQDZbBkAAABxOhbQZBf/ihseGRbjbgDrehtvLwAAMEr2fwBoHwBzNwdqJADWZBByNQD2gAAALEnkcxD08e9/Qha1XhltKwCJXUX88+3MvLV8QBbQbBr22MeMSRe5opijVBjCZBnDsKf55NjlfCrpkVftp33wu52eUhjojE3zybHvtJHrnWuUbVnYzMade2p+SiurkILSxL6oVifEXhoAABbcqIjmgjjCjGztq4PhXwBaAACxZTGKPwCFVzxkEwCadmR9TC/8yqn3l0v4oWH81bz4pmn5rnn838yQTzCdUis7OUN4SDdlQztVPz+4WiA5OERuTT7LcimjYjN6UTy8bC3Udib3m1M1IxbdoHmVhn1mXFZJQj4njpnzAAAPPElEQVR4nO2daXvTRheGbSvBVlIHB9vIRo6zOMQhIWTf1wIJlJSWpiu0hQJt6UbL///0ziJZ0mjWM6Ip16vnUxtkaW6f2zOakSwXCnny5MmTJ0+ePHny5MmTJ0+ePHny5MmTRyfjl90AZSxbOP/5k2+WsmnJe8nS/pPP7fawNeF90dhdzaY5mefpbuMLb/GO1T5uT5e80orvP97OqFHZZXvP9zc9rzT9sc1e5qdKKLWNTr+xs/9fsnVpf8fvuxs13Lwpmx1tTeBdlLy1iuv6jd2nGbXPNke7Dd9xm7c80jorTZGkFNHb7DhO3/f3Lt9WbGffcTqblK9kpSmVtBSY6joI8pJtXdp3MJ7juge1Qdum4PsLJKVlvFXBiA629SizFpvl6BDZSRqxcsuLmmahaShpzFScy7E1sBMnMtRS05ikcVMJZMP5V20N7XRYQ+00jUsamNoMEbGth/+WrQM7qaHLHtOuCaimCUkDxtBUamtj7/2f7qyeNAblw4Yu1FKtgmrKSkpNPXBdJwbZcI/fp61Lx24cj2Mo1XQetPeUpClT37etCTsFhtpoypGUljFuamDrSfa2MnaKDLXQlCspz1QK2c/U1qXjPovnuM4at4BgTfmSUlOXV5gyoviN86xsTdlJDS0JAWGaiiSlZVxII2ZkK8dOqaEkEE3FklLEtKmhrTanO9scO1WGkgA0lUhKgibGnDLa2Xp03uDhoQLKDCUBaCqVlJaRZyrcVmwnTwuloSTmmiokpWVccwRNQpCTH5nlJtdOLUNJjDVVSUoRRabi933ULOIdrXgagOaaqiUlEZrqOEWzCAE3lIaSmGqqIymJ2NS6EWBdYGhFx1ASQ021JKWIIlNdI0L+29TZ1DKUZGLLiFBTUpLYxBiuKf9N0jSUZPq2EeHHBoRksZFXAEtJB8uFmoRmH8R1bUsJosdON0w15bxDzGKMMhPrRoR3F432zjdVv69Jl1Aw1ZVk8a4R4fyM2e4Hi40wTVMGGBqKM2M45Bvunm+qNqGtoSRmgIV7s8ZHSJuqqykjqbmhKLP3DAn1B8QoKVN1NU2+SrQYI4/hcGje1QSMjKkQSTUmErwYdjQouqdtyTATYz1N45KCDMWZMgUs3Acdh1ls1BsS4y8AGYpz35jw1LyroUksNhpKCjQUZfbUmBDS1QSIMVN1+prBG4KmulBA846mUBgHdTUk3nIzbLWOppGhqsUYSRYBt9XMgI8Wnxir+5qwn4EbijNjDli4MJlepBBDU9WadkJD4QVEE4sLACG4qyEZLIvrSWplaAnU0RQKd8BdDU1gqkrTur2hJeCq/viM3UGDJRyVpq61oTgzoPv34J1piEiWcJSSai4XSrMIATRaqxEEmyrXtKO9XCiL4RpNGLOVDH6QqXJNDZYLJTFcwQhzZq1piZhalREaLBdKsngGIjReyeCntilGrNr2oUFMVzDCZGApSVtMmA1gaQIGaLZoKkztQFLDgywchd/2lUVXg7tTycfQeqgnAXY00JWMZPC6hoTQ6WxmgGi+ghHEvqvxSnjGLwas4zNSe1GhHY39WY13i1x6E4/5+KTUrRgv/rKBndEgSW0/hl4whZITOq5rPehPgDQ9ha22RaltdFSz4GD2a3/iNgXoa06/tAXcVM/zs5nf43wJQFy3q6EXXRoWEw426Vj2N1PmC1EFPFjAR3xvObbALx4Qo3VHt2kxyZ+dBX69a/4C2td4a/Glbx1Cm2nwImzuRAJcq6kdJC5faBE6bgd4CjcLPaNBGYct7bM32egRwvub++CvIG7B+prUpVLxsjBzvRF6CjcFvFf/3gyIr9RkL3drE4JP4WZML4+SjM9AutLgRC0ZIWFqS+Ap3DRsrW2+ZI7ocW+s1SeEncJNl6Cn3l+bdqWDEzUwIeQUbvZrIB/KbbMBMfU9BQihcZc6YTEcFgpfmVTRE91takZoeAo3/ZUNoP5VRM9LnKglIzwxFWyPT+G0VxkhVw6jaJ59e7Xawcqm8JZoIaHgplLcpW5uHtRqepCQmVOQ+QuNCnpebXlhpVqtCvkAhIix2q6uLCzXdEq5eAFexbit+hSi4q1tdtrVKufWNDtCfKpXrbbdzTV1KWctupr7shHRq5U2VortqrKxIEL6IgRZXNkoSSGnzW80iTIv0hS5ubbgkuJJ+4xBPcwJBz0w/gQsrIl9nQA7ijPO62q8mnewUo/hyR0VE2q/CpWyvnLgcUs5ZflwkzMGERXv1oJTrSZX6uXFABIycqNj7izcSpVyCnbZKZb1mKh4VNhMFk/DUTBh6kwBl5LpemYspr9h7k2ExVveWKm2eZdZVC2FEvJel+x6JiD3YKSCxgwyKric4pEoHBVPECVDKA2/E8ajCO16Zq2e3BLFo6OC8CKZqp1wQuHcmYwiByWLSUUi25NiuqLaNUd46q0klN4EUK1OZvUUq28mJcdROyom1Hil9E6OyawemPPtqOwwGs20IJTe3Dj6XTaAS9ISajhqQyi/WWUyG0KppDqOWhFKPc1I0z9lkrpRzFspeUVsv5Kjjz7LhFBWQneo1Wo1g1RQEm0bgPMJ6ywL3RzvJtwl2vuQDDETTZ9KP4bNIV5arQgcN1hAyLAgGk6assNnoul30p60w0dkwi9DR+elTWlXc/P7DAilJSwWKzqI/FbqEDYr8sNnoKlcUtRMHUQwYbOiuAN38gdrwmc35YcoVtSILQEh93OXBFSUMAtNFSXERVQiighVr0OAynv9rTX9QUlYrCgRm/yexlW9rKIsYQaafq+SlBRRgdjkn9S4FemrWhWNEtprqgYkRZQjCkpRkRJiQHUJEaIdoIaktIgcxGgAFxK2wi3TfU5LfKaQjKWmGpIWaRErTCN7rR9HnrfCxkoJWw+6Pw71OIA6JSzefGxFOCo9oQlTZxFbvYc/jXRHXtBmi/r8sPC9VyPd7k8Pey0WUOsrqKOjNoDbOpIWgyIOEFu91y+7IyjdBy0NwtZruvHL1wNGCqhVQqSpzYOpjrUkDYtIEVu9B69Ik1Fe9ejHkFsN/KKghDTdVw8oYwCo+WV3K02LWpIWwyJixN7zFyEfavPrlpIwKCHd/ufniDEA1CwhaiMcUFfSQRFd50F3LmowLWJLQojfkpex7btzc88d16iEVprqSloMi+hW2/Unv3S73XgRmxLC5lDrYbRxt/vLE7ddpYT6z5y4eQwm/EhX0rCIDlmrrf568XNYyZc9BWFYwu7cyMWvVbLu7JqVsDj6ERRQvsjGxIm979V2e+fNqzlcyu7DIVFzyZsyhEvY7c69erPTDq+JuGYltNBUvhLMa2/UOeBl999/G5nrvuxJCXs/oeL99nu9Hbvk45iV0EJT+UowGyfV/aFS/vHmxUMp4cOf3/zRZi5okU+0yaGhmhpJGjSY/SOCJNKJCN0ii1ekhGbPQpuEPTvVSNIi/fjw/t6REHJnR6YlRITfgAjNJKUtFv1dRMgtlXEJi6PfQgANJS2SInL/LiEUbG9YQqCmR8aE9cwITY8M01S+EsyNy2+aKyTkL1KYlxCmqXEJcZu5f+6YEQr2Ig9AU9VKMDcut4eoCwn5m5uXEKTpM3NJUeP4faCQkL8TwIGLo38aE0JKKIoZISzGmqolrXLD3dQVEPJ1NNhxnND0AdRLDcXF50q4DtiKXyzkX+zrCAj5XWniiuLgqmJF0Z6G8fxiR/Ro5vAyNH8NmFuWuoCQ+4lzuftNfRGHTd8UsHCcfrI9g8i7ctRyuVe0BYS8Pwr3qwDcMybcVhE6vDX5Jv+ZO9qEHYEcKkcdH/BAfyUhrylEprSp3HGSM+65st1K0zAHLJwoPohcT4OmsEAdLiFb7LrojVM66vR3AYRHyiJyPA1tYoi4ZwLsHzvKvYrjQ36sQDle8N7uwT91pDCUiA/oOOaOOg3QJP9cqWna09g/JRF5NUz8X2yvxo467g4EsLCv1jRllPnDSwPaeHONHXV82GLbtlpT1tPk2w18FjQjhoajjg9cMFVbyjaHEUp3GuTq71JACAMs7OkgVqTvt8zU8GSavYEz6YWGo07/BEi4qvFBTLYnbVTw7SW3nY5LJwypO1QVe+QENFaQaHwQk1Jx2oM+jG33r6s30vnkL7fNu8c4TqjlKHCswNnV0TTuKU+p/s2DT67w88nGJO8Iih2mj3AIBdQaLxLvOefo/t7wdQHglSvXyye8H9Axc9Tx98GEGqc1BHHgaern2Ppvy2UZ4Va5vJf+gTUzRwGT3yjir/YmUuG3iPCVy+sSwnW8wdt+P/mDg+E7puUoZPIb5bGWpgNPE4S+S/jK5b8lhH/TTd724wcKCfUchUx+o2iNF1GbYk3ynYCvXL52VUh49Vq40Vs39kujTRNHQZPfKHofxNDTAaFfeVQe5B9JDf+JNnvrhIwBoaajoMlvFPU0ON6oZvCbyDsxvnL5nRDwypV38Q0f7fipnakDmvxG0ZgGB4it4F1n+crlGxLCG8lNESPmqhg4anFCQ6I5XgStqiC+c4avXBZLigdEJo/OEWPFwFGLExoajWkwDVarz+Erb0kJt1LbI8a+vqNOHzb5jaJcNo0QW73zR2epBpfHpITr6RecPTrvaTsKnfxG0ZkGU0C/8SmHr1w+lRL+zXvJ2afcnyLlE1r/BrpWDft+Y+fx6vzYMKe5kgEfEV7jvGJ4bH71eEcTEjr5jaKcBiM6/+SIfty3OIzXrkoSHxAHfPQZiEtHJ76aEjz5jfJUVkQX4R3uxzw5GxtmGf+5fk2c6+9YvuGx2EMStvcPG77o10lpCTP4DWLhBxHROY/ZM6a7CDHJ+O50WJzTGwzf8Bj7sNXVxzJhbccKnEPe3vu+P1AzmXGMOJxstSzMlmO8L6BjYX0upcXkN0p6GoyKdy7+XeP54SSjLiHhGxY+iWX7+JBTSovJb2zXDYauv7cqV+OMIA5vGRBukf8ekz//cGl1z2UobSa/UeJqNnb3NfZJTQ2ar0EY/CfXUCbbR7uNmLCuPV4hnAYTNbVnYnciRiVhyKf9AMvV4/OglH2778sMdujjIW+P268IMyijbnQKGGXpaA8PlnaT3yifaanJJOhwdPm2zB/2tL2/+5nxizLNXX3E1CD4gUS3jJIx4j+fMx3ED7WANONjKsax4aweo3NZuSNHHLN+GNnlB5VRkg+9gCTz4+Jcdtvy5MmTJ0+ePHny5MmTJ0+ePHny5MmTJ0+ePHny5Mnzf5X/AbKbOreWP3TaAAAAAElFTkSuQmCC)

**Backend**
Deployed with [Heroku](https://heroku.com/):  https://proposals-api-9b953f7baef2.herokuapp.com/proposals

**Frotend**
Deployed with [Heroku](https://heroku.com/): https://proposals-ui-639da5e02ba5.herokuapp.com/

## Local development

### Smart Contracts

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

### Backend

The challenge is set up to run in a local environment, consuming the contracts already deployed on the Goerli testnet. To initialize the backend, execute the following commands:

1. Navigate to the `/proposals-api` directory.
2. Run the following commands:

    ```bash
    npm i
    npm run dev
    ```

The backend exposes a GET endpoint `/proposals` that returns the list of proposals from the DAO contract.

### Frontend

To initialize the frontend, execute the following commands:

1. Navigate to the `/proposals-ui` directory.
2. Run the following commands:

    ```bash
    npm i
    npm start
    ```

### Admin Scripts

In the `/admin` directory, there are two scripts: one for creating proposals and another for transferring tokens. To use them, follow these steps:

**It would be neccessary to update the contract addresses in the scripts.**

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
node createProposal.js "Minimum votes should always be at least 10?" "This is the third proposal" "Yes" "No" 3600 10
```


## Additional Notes
Features Nice To Have in the frontend:
- Allow admin to finish a proposal
- Allow admin to switch a proposal state between Pending and Closed

The contract is already prepared for an admin to finish a proposal and also switch a proposal state between Pending and Closed. It would be nice to have those functionalities on the UI.