import { Button, Typography } from '@mui/material';

const ProposalOptionVote = ({ option, votes, proposalStatus, onOptionClick }) => {

  return (
    <Button 
        variant="outlined" 
        color="primary" 
        style={{ flexDirection: 'column', alignItems: 'center'}} 
        disabled={proposalStatus !== 'Pending'}
        onClick={onOptionClick}>
        {option}
        <Typography variant="caption">
            {votes} votes
        </Typography>
    </Button>
  );
};

export default ProposalOptionVote;
