import { ProposalStatus } from './ProposalStatus'

export default interface Proposal {
    title: string,
    description: string,
    proposalDeadline: number,
    minimumVotes: number,
    votesForOptionA: number,
    votesForOptionB: number,
    winningOption: number,
    status: ProposalStatus
}