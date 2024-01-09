
import express from 'express'
import proposalController from '../controllers/proposal'
const proposalRouter = express.Router()

proposalRouter.get('/', proposalController.getProposals)

export default proposalRouter