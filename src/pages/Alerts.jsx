import React from 'react';
import { List, ListItem, ListItemText, Chip, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const Alerts = ({ alerts }) => {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>Alerts</Typography>
      <List>
        {alerts.map((alert) => (
          <ListItem key={alert.id} sx={{ borderBottom: '1px solid #eee' }}>
            <WarningIcon color="error" sx={{ mr: 2 }} />
            <ListItemText
              primary={alert.message}
              secondary={`Generator: ${alert.generatorId} - ${new Date(alert.timestamp).toLocaleString()}`}
            />
            <Chip
              label={alert.resolved ? 'Resolved' : 'Active'}
              color={alert.resolved ? 'success' : 'error'}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Alerts;