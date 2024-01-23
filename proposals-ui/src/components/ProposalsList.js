import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid } from '@mui/material';
import ProposalItem from './ProposalItem';

const GET_PROPOSALS_ENDPOINT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ?
    'http://localhost:3003/proposals' :
    'https://proposals-api-9b953f7baef2.herokuapp.com/proposals';

const ProposalsList = () => {
    const [proposals, setProposals] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(GET_PROPOSALS_ENDPOINT);
            setProposals(response.data);

        } catch (error) {
            console.error('Error fetching proposals:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Typography variant="h4" p={4} style={{color: 'rgb(129 116 116)'}}>Proposals</Typography>
            <Grid container spacing={2}>
            {proposals.map((proposal, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <ProposalItem proposalIndex={index} proposal={proposal} onVote={fetchData}/>
                </Grid>
            ))}
            </Grid>
        </div>
    );
};

export default ProposalsList;
