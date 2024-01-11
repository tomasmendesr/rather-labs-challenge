import { Button, Typography, CircularProgress } from '@mui/material';

const ProposalOptionVote = ({ option, votes, proposalStatus, onOptionClick, isLoading }) => {
    return (
        <Button 
            variant="outlined" 
            color="primary" 
            style={{ flexDirection: 'column', alignItems: 'center'}} 
            disabled={proposalStatus !== 'Pending' || isLoading}
            onClick={() => onOptionClick()}>
            {!isLoading && (
                    <>
                        {option}
                        <Typography variant="caption">
                            {votes} votes
                        </Typography>
                    </>
            )}
            {isLoading && <CircularProgress size={26} color="inherit" />}
        </Button>
    );
};

export default ProposalOptionVote;
