import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';

export default function Docs() {
  console.log('Docs');
  return (
    <>
      <Box className="borderGrayBottom">
        <Header />
      </Box>
      <Grid container spacing={2} style={{ marginTop: 1, height: '90vh' }}>
        <Grid item xs={12} md={6} className='borderGrayRight' >
          <InfoCard ></InfoCard>
          <InfoCard ></InfoCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoCard />
          <InfoCard />
        </Grid>
      </Grid>
    </>
  )
}
