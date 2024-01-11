import { ProposalStatus } from '../types/ProposalStatus'
const proposalStatuses = [ProposalStatus.PENDING, ProposalStatus.CLOSED, ProposalStatus.FINISHED]

const buildProposal = (data: any) => {
    const deadline = new Date(Number(data.proposalDeadline) * 1000)
    return {
        title: data.title,
        description: data.description,
        optionA: data.optionA,
        optionB: data.optionB,
        proposalDeadline: deadline,
        minimumVotes: Number(data.minimumVotes),
        votesForOptionA: Number(data.votesForOptionA),
        votesForOptionB: Number(data.votesForOptionB),
        winningOption: Number(data.winningOption),
        status: isProposalExpired(deadline) ? ProposalStatus.FINISHED : proposalStatuses[data.status]
    }
}

const isProposalExpired = (proposalDeadline: Date) => {
    return new Date() > new Date(proposalDeadline)
}


const ProposalService = {
    buildProposal,
}
    
export default ProposalService