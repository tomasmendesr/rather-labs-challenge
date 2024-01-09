import { Request, Response } from 'express'
import Web3 from 'web3'
import DAOabi from '../../abi/DAOabi.json'
import TransactionHelper from '../utils/transactionHelper'
import Proposal from '../types/Proposal'

const SMART_CONTRACT_DAO_ADDRESS: string = '0xcb79bBE40BB3819f25ba69E71BA21aE2dBc16161'
const WEB3_PROVIDER: string = 'https://goerli.infura.io/v3/401b77306e0843f3976330f8b1444dd3'

const web3 = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER))
const contractDAO = new web3.eth.Contract(DAOabi as any[], SMART_CONTRACT_DAO_ADDRESS)

const getProposals = async (_req: Request, res: Response) => {
    console.log("Getting proposals...")
    try {
      const proposals: Proposal[] = await contractDAO.methods.getAllProposals().call()
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