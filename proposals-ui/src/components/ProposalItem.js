import { Card, CardContent, Chip, Typography } from '@mui/material';
import ProposalOptionVote from './ProposalOptionVote';

const ProposalItem = ({ proposalIndex, proposal }) => {
  const statusColors = {
    Pending: 'green',
    Closed: 'grey',
    Finished: 'red',
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

  const vote = (option) => {
    console.log(`voted for option ${option}. proposal index: ${proposalIndex}`)
  }

  return (
    <Card>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Chip
            label={proposal.status}
            style={{
              backgroundColor: statusColors[proposal.status],
              color: 'white',
              fontWeight: 'bold',
            }}
          />
        </div>
        <Typography variant="h6">{proposal.title}</Typography>
        <Typography variant="body2">{proposal.description}</Typography>
        <Typography variant="body2" mt={1}>
          <strong>Deadline:</strong> {formatDate(proposal.proposalDeadline)}
        </Typography>
        <Typography variant="body2">
          <strong>Minimum Votes:</strong> {proposal.minimumVotes}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <ProposalOptionVote option={proposal.optionA} votes={proposal.votesForOptionA} proposalStatus={proposal.status} onOptionClick={() => vote(0)}/>
          <ProposalOptionVote option={proposal.optionB} votes={proposal.votesForOptionB} proposalStatus={proposal.status} onOptionClick={() => vote(1)}/>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalItem;
