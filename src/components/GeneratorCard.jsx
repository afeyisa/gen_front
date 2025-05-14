import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const GeneratorCard = ({ generator }) => {
  return (
    <Card sx={{ minWidth: 300, m: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {generator.id}
        </Typography>
        <Typography color="text.secondary">{generator.location}</Typography>
        
        <Box sx={{ my: 2 }}>
          <Typography variant="body2">Temperature: {generator.temp}°C</Typography>
          <LinearProgress 
            variant="determinate" 
            value={generator.temp} 
            color={generator.temp > 80 ? 'error' : 'primary'}
            sx={{ height: 10, my: 1 }}
          />
        </Box>
        
        <Box sx={{ my: 2 }}>
          <Typography variant="body2">Oil Level: {generator.oil}%</Typography>
          <LinearProgress 
            variant="determinate" 
            value={generator.oil} 
            color={generator.oil < 30 ? 'error' : 'primary'}
            sx={{ height: 10, my: 1 }}
          />
        </Box>
        
        <Typography 
          variant="body1" 
          color={generator.status === 'running' ? 'success.main' : 'text.secondary'}
        >
          Status: {generator.status.toUpperCase()}
        </Typography>
        
        <Box sx={{ height: 200, mt: 2 }}>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5] }]}
            series={[
              { data: [generator.temp - 10, generator.temp - 5, generator.temp, generator.temp + 2, generator.temp], label: 'Temperature' },
              { data: [generator.oil - 5, generator.oil, generator.oil + 3, generator.oil - 2, generator.oil], label: 'Oil Level' },
            ]}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default GeneratorCard;