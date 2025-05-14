import React from 'react';
import  {Grid}  from '@mui/material';
import Typography from '@mui/material/Typography';
import GeneratorCard from '../components/GeneratorCard';

const Dashboard = ({ generators }) => {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>Generator Monitoring</Typography>
      <Grid container spacing={2}>
        {generators.map((generator) => (
          <Grid item key={generator.id}>
            <GeneratorCard generator={generator} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;