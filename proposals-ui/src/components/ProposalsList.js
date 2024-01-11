import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Typography, Grid } from '@mui/material';
import ProposalItem from './ProposalItem';

const proposalsArray = [
    {
        "title": "First proposal",
        "description": "this is the first proposal example",
        "optionA": "option A",
        "optionB": "option B",
        "proposalDeadline": "2024-01-09T17:45:55.000Z",
        "minimumVotes": 10,
        "votesForOptionA": 0,
        "votesForOptionB": 0,
        "winningOption": 0,
        "status": "Pending"
    },
    {
        "title": "First proposal",
        "description": "this is the first proposal example",
        "optionA": "option A",
        "optionB": "option B",
        "proposalDeadline": "2024-01-09T17:45:55.000Z",
        "minimumVotes": 10,
        "votesForOptionA": 0,
        "votesForOptionB": 0,
        "winningOption": 0,
        "status": "Closed"
    },
    {
        "title": "First proposal",
        "description": "this is the first proposal example",
        "optionA": "option A",
        "optionB": "option B",
        "proposalDeadline": "2024-01-09T17:45:55.000Z",
        "minimumVotes": 10,
        "votesForOptionA": 0,
        "votesForOptionB": 0,
        "winningOption": 0,
        "status": "Pending"
    },
    {
        "title": "First proposal",
        "description": "this is the first proposal example",
        "optionA": "option A",
        "optionB": "option B",
        "proposalDeadline": "2024-01-09T17:45:55.000Z",
        "minimumVotes": 10,
        "votesForOptionA": 0,
        "votesForOptionB": 0,
        "winningOption": 0,
        "status": "Finished"
    },
    {
        "title": "First proposal",
        "description": "this is the first proposal example",
        "optionA": "option A",
        "optionB": "option B",
        "proposalDeadline": "2024-01-09T17:45:55.000Z",
        "minimumVotes": 10,
        "votesForOptionA": 0,
        "votesForOptionB": 0,
        "winningOption": 0,
        "status": "Pending"
    }
]
const ProposalsList = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:3000/proposals');
        // setProposals(response.data);
        setProposals(proposalsArray);

      } catch (error) {
        console.error('Error fetching proposals:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4" p={4} style={{color: 'rgb(129 116 116)'}}>Proposals</Typography>
      <Grid container spacing={2}>
        {proposals.map((proposal, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ProposalItem proposalIndex={index} proposal={proposal} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProposalsList;
