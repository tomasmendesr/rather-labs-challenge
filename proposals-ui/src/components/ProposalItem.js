import { Card, CardContent, Chip, Typography, Tooltip } from '@mui/material';
import ProposalOptionVote from './ProposalOptionVote';
import voteProposal from '../web3/voteProposal';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ProposalItem = ({ proposalIndex, proposal }) => {
    const [snackbarData, setSnackbarData] = useState({
        snackbarOpen: false,
        snackbarMessage: '',
        snackbarSuccess: true
    })
    const [isVoting, setIsVoting] = useState(false)
    
    const statusColors = {
        Pending: 'green',
        Closed: 'grey',
        Finished: 'red',
    };

    const statusHelpDescription = {
        Pending: 'The proposal can still receive votes',
        Closed: 'The proposal is temporarily ineligible to receive votes',
        Finished: 'The time to vote on this proposal has expired',
    };

    const formatDate = (date) => {
        const formattedDate = new Date(date).toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        });
        return formattedDate;
    };

    const isProposalExpired = (proposalDeadline) => {
        return new Date() > new Date(proposalDeadline)
    }

    const vote = async (option) => {
        if (isProposalExpired(proposal.proposalDeadline)) {
            setSnackbarData({
                snackbarOpen: true,
                snackbarMessage: 'The proposal has already expired',
                snackbarSuccess: false
            });
            return;
        }

        setIsVoting(true);
        const result = await voteProposal(proposalIndex, option);
        setIsVoting(false)
        setSnackbarData({
            snackbarOpen: true,
            snackbarMessage: result.message,
            snackbarSuccess: result.succeed
        });
    }

    const resetSnackbar = () => {
        setSnackbarData({
            snackbarOpen: false,
            snackbarMessage: '',
            snackbarSuccess: false
        })
    }

    return (
        <div>
            <Card style={{ minHeight: '280px' }}>
                <CardContent>
                    <Tooltip title={statusHelpDescription[proposal.status]} arrow>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}>
                        <Chip
                        label={proposal.status}
                        style={{
                            backgroundColor: statusColors[proposal.status],
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                        />
                    </div>
                    </Tooltip>
                    <Typography variant="h6">{proposal.title}</Typography>
                    <Typography variant="body2">{proposal.description}</Typography>
                    <Typography variant="body2" mt={1}>
                    <strong>Deadline:</strong> {formatDate(proposal.proposalDeadline)}
                    </Typography>
                    <Typography variant="body2">
                    <strong>Minimum Votes:</strong> {proposal.minimumVotes}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                    <ProposalOptionVote 
                        option={proposal.optionA} 
                        votes={proposal.votesForOptionA} 
                        proposalStatus={proposal.status} 
                        onOptionClick={() => vote(0)}
                        isLoading={isVoting}/>
                    <ProposalOptionVote 
                        option={proposal.optionB} 
                        votes={proposal.votesForOptionB} 
                        proposalStatus={proposal.status} 
                        onOptionClick={() => vote(1)}
                        isLoading={isVoting}/>
                    </div>
                </CardContent>
            </Card>
            <Snackbar
            open={snackbarData.snackbarOpen}
            autoHideDuration={6000}
            onClose={() => resetSnackbar()}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
            <MuiAlert
                elevation={6}
                variant="filled"
                onClose={() => resetSnackbar()}
                severity={snackbarData.snackbarSuccess ? 'success' : 'error'}
            >
                {snackbarData.snackbarMessage}
            </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default ProposalItem;
