import DAOabi from './abi/DAOabi.json';
import tokenABI from './abi/tokenABI.json';
import Web3 from 'web3';
import { getContractDAOAddress, getContractTokenAddress } from './getContratAddress';

const voteProposal = async (proposalIndex, option) => {
    try {
        if (!window.ethereum) {
            return {
                succeed: false,
                message: 'Metamask is not installed.'
            }
        }

        const web3 = new Web3(window.ethereum);
        
        const userAccounts = await window.ethereum.request({method: 'eth_accounts'});
        const userAccount = userAccounts[0]

        const contractDAOAddress = getContractDAOAddress();
        const contractTokenAddress = getContractTokenAddress();

        const daoContract = new web3.eth.Contract(DAOabi, contractDAOAddress);
        const tokenContract = new web3.eth.Contract(tokenABI, contractTokenAddress);
        const tokenBalance = await tokenContract.methods.balanceOf(userAccount).call();

        if (tokenBalance <= 0) {
            return {
                succeed: false,
                message: 'You do not have enough Rather tokens to vote'
            }
        }

        const result = await daoContract.methods.vote(proposalIndex, option).send({ from: userAccount });

        return {
            succeed: true,
            data: result,
            message: 'Vote applied!'
        }
      } catch (error) {
        console.log(`Vote failed: ${error}`)
        return {
            succeed: false,
            message: 'Something went wrong. Please try again'
        }
      }
}

export default voteProposal;