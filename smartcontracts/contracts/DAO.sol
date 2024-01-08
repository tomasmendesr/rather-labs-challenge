// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RatherToken.sol";

contract DAO {

    RatherToken public ratherTokenContract;
    enum ProposalStatus { Pending, Closed, Finished }

    struct Proposal {
        string title;
        string description;
        uint256 proposalDeadline;
        uint256 minimumVotes;
        uint256 votesForOptionA;
        uint256 votesForOptionB;
        uint8 winningOption; // 0 for option A, 1 for option B
        ProposalStatus status;
        address admin;
    }

    event ProposalCreated(uint256 indexed proposalIndex, string title, uint256 proposalDeadline);
    event Voted(uint256 indexed proposalIndex, address indexed voter, uint256 vote);
    event ProposalFinished(uint256 indexed proposalIndex, bool proposalPassed);

    Proposal[] public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    constructor(address _tokenAddress) {
        ratherTokenContract = RatherToken(_tokenAddress);
    }

    function createProposal(
        string memory _title,
        string memory _description,
        uint256 _proposalDeadline,
        uint256 _minimumVotes
    ) public {
        require(_proposalDeadline > block.timestamp, "Deadline must be a future date");

        proposals.push(
            Proposal({
                title: _title,
                description: _description,
                proposalDeadline: _proposalDeadline,
                minimumVotes: _minimumVotes,
                votesForOptionA: 0,
                votesForOptionB: 0,
                winningOption: 0,
                status: ProposalStatus.Pending,
                admin: msg.sender
            })
        );

        uint256 proposalIndex = proposals.length - 1;
        emit ProposalCreated(proposalIndex, _title, _proposalDeadline);
    }

    function vote(uint256 _proposalIndex, uint256 _vote) public {
        require(ratherTokenContractf.balanceOf(msg.sender) >= 0, "Not enough tokens to vote");
        require(_vote == 0 || _vote == 1, "The vote must be 0 (option A) or 1 (option B)");
        require(proposals[_proposalIndex].proposalDeadline > block.timestamp, "The votation date has already finished");
        require(proposals[_proposalIndex].status == ProposalStatus.Closed, "The proposal is already closed");
        require(_proposalIndex < proposals.length, "Proposal was not found");
        require(!hasVoted[_proposalIndex][msg.sender],  "Already voted");

        hasVoted[_proposalIndex][msg.sender] = true;

        if (_vote == 0) {
            proposals[_proposalIndex].votesForOptionA++;
        } else {
            proposals[_proposalIndex].votesForOptionB++;
        }

        emit Voted(_proposalIndex, msg.sender, _vote);
    }

    function changeProposalStatus(uint256 _proposalIndex, ProposalStatus _newStatus) external {
        Proposal storage proposal = proposals[_proposalIndex];
        require(msg.sender == proposal.admin, "Only the admin can call this function");

        require(proposal.status == ProposalStatus.Finished, "The proposal is already finished");
        require(_newStatus == ProposalStatus.Pending || _newStatus == ProposalStatus.Closed, "Invalid status");

        proposal.status = _newStatus;
    }

    function finishProposal(uint256 _proposalIndex) external {
        Proposal storage proposal = proposals[_proposalIndex];
        require(proposal.status != ProposalStatus.Finished, "Proposal is already finished");
        require(msg.sender == proposal.admin, "Only the admin can call this function");

        proposal.status = ProposalStatus.Finished;

        if ((proposal.votesForOptionA + proposal.votesForOptionB) >= proposal.minimumVotes) {
            if (proposal.votesForOptionA > proposal.votesForOptionB) {
                proposal.winningOption = 0; // Opción A ganó
            } else {
                proposal.winningOption = 1; // Opción B ganó
            }
        }

        emit ProposalFinished(_proposalIndex, true);
    }

    function getWinningOption(uint256 _proposalIndex) external view returns (uint8 winningOption) {
        Proposal storage proposal = proposals[_proposalIndex];
        require(proposal.status == ProposalStatus.Finished, "Proposal in still on course");

        return proposal.winningOption;
    }

    function getAllProposals() external view returns (Proposal[] memory) {
        return proposals;
    }

    function getProposal(uint256 _proposalIndex) external view returns (
        string memory title,
        string memory description,
        uint256 proposalDeadline,
        uint256 minimumVotes,
        uint256 votesForOptionA,
        uint256 votesForOptionB,
        uint8 winningOption,
        ProposalStatus status
    ) {
        Proposal storage proposal = proposals[_proposalIndex];
        return (
            proposal.title,
            proposal.description,
            proposal.proposalDeadline,
            proposal.minimumVotes,
            proposal.votesForOptionA,
            proposal.votesForOptionB,
            proposal.winningOption,
            proposal.status
        );
    }
}
