import { ProposalStatus } from '../types/ProposalStatus'
const proposalStatuses = [ProposalStatus.PENDING, ProposalStatus.CLOSED, ProposalStatus.FINISHED]

const buildProposal = (data: any) => {
    return {
        title: data.title,
        description: data.description,
        optionA: data.optionA,
        optionB: data.optionB,
        proposalDeadline: new Date(Number(data.proposalDeadline) * 1000),
        minimumVotes: Number(data.minimumVotes),
        votesForOptionA: Number(data.votesForOptionA),
        votesForOptionB: Number(data.votesForOptionB),
        winningOption: Number(data.winningOption),
        status: proposalStatuses[data.status]
    }
}

const ProposalService = {
    buildProposal,
}
    
export default ProposalService