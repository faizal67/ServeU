import React from 'react';
import { Icon, Typography } from '@mui/material';
import { SentimentDissatisfied } from '@mui/icons-material';

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Icon sx={{ fontSize: 48, color: 'primary' }}><SentimentDissatisfied /></Icon>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        No Data Available
      </Typography>
      <Typography variant="body1" color="textSecondary">
        There is no data to display at the moment.
      </Typography>
    </div>
  );
};

export default NoData;

