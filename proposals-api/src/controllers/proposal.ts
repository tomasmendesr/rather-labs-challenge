import { Request, Response } from 'express'
import Web3 from 'web3'
import DAOabi from '../../abi/DAOabi.json'
import config from '../../config'
import Proposal from '../types/Proposal'
import ProposalService from '../services/proposal'

const SMART_CONTRACT_DAO_ADDRESS: string = config.DAOContractAddress
const WEB3_PROVIDER: string = config.web3Provider

const web3 = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER))
const contractDAO = new web3.eth.Contract(DAOabi as any[], SMART_CONTRACT_DAO_ADDRESS)

const getProposals = async (_req: Request, res: Response) => {
    console.log("Getting proposals...")
    try {
        const proposalsFromContract: any[] = await contractDAO.methods.getAllProposals().call()
        const proposals: Proposal[] = proposalsFromContract.map((proposal: any) => ProposalService.buildProposal(proposal))
        res.send(proposals)
    } catch (err: any) {
      console.log(`Something went wrong getting proposals. ${err}`)
      res.status(500).send({
        message: `Could not get proposals`,
        error: err.toString()
      })
      return err
    }
}

const ProposalController = {
    getProposals,
}
    
export default ProposalController