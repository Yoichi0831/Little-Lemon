import React from 'react';
import { Grid2, Paper, Box } from '@mui/material';

function Wireframe() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={12}>
        <Paper elevation={3}>
          <Box p={2}>Header</Box>
        </Paper>
      </Grid2>
      
      <Grid2 item xs={3}>
        <Paper elevation={3}>
          <Box p={2}>Sidebar</Box>
        </Paper>
      </Grid2>
      
      <Grid2 item xs={9}>
        <Paper elevation={3}>
          <Box p={2}>Main Content</Box>
        </Paper>
      </Grid2>
      
      <Grid2 item xs={12}>
        <Paper elevation={3}>
          <Box p={2}>Footer</Box>
        </Paper>
      </Grid2>
    </Grid2>
  );
}

export default Wireframe;
