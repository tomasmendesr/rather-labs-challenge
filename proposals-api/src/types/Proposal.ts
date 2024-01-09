import { ProposalStatus } from './ProposalStatus'

export default interface Proposal {
    title: string,
    description: string,
    optionA: string,
    optionB: string,
    proposalDeadline: Date,
    minimumVotes: number,
    votesForOptionA: number,
    votesForOptionB: number,
    winningOption: number,
    status: ProposalStatus
}