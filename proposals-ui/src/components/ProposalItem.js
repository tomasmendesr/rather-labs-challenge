import React from 'react';
import { Card, CardContent, Chip, Button, Typography } from '@mui/material';

const ProposalItem = ({ proposal }) => {
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
          <Button variant="outlined" color="primary" style={{ flexDirection: 'column', alignItems: 'center' }}>
            {proposal.optionA}
            <Typography variant="caption">
              {proposal.votesForOptionA} votes
            </Typography>
          </Button>
          <Button variant="outlined" color="primary" style={{ flexDirection: 'column', alignItems: 'center' }}>
            {proposal.optionB}
            <Typography variant="caption">
              {proposal.votesForOptionB} votes
            </Typography>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalItem;
