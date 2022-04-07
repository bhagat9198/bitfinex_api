import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export default function CryptoSelected() {
  const storeState = useSelector(state => state.reducer);
  const selectedCryto = storeState.cryptoSelected;

  if (selectedCryto) {
    let dailyChangeUI;
    if (selectedCryto.dailyChange > 0) {
      dailyChangeUI = <Typography variant='subtitle1' color='green'> + {selectedCryto.dailyChange}% </Typography>
    } else if (selectedCryto.dailyChange < 0) {
      dailyChangeUI = <Typography variant='subtitle1' color='red'> {selectedCryto.dailyChange}% </Typography>
    } else {
      dailyChangeUI = <Typography variant='subtitle1' color='gray'>  {selectedCryto.dailyChange}% </Typography>
    }

    return (
      <>
        <Box className='borderGrayBottom' >
          <div style={{ display: 'flex' }}>
            <div>
              <Typography variant='h4' gutterBottom={true}>{selectedCryto.name}</Typography>
              <div className='flex justifySpaceBetween'>
                <Typography variant='subtitle1' >${selectedCryto.latestPrice}</Typography>
                {dailyChangeUI}
              </div>
            </div>
            <div style={{ flex: 1 }}></div>
          </div>
        </Box>
        <Grid container spacing={2} style={{ marginTop: 10 }} >
          <Grid item xs={2}>
            <Typography color='gray'>HIGH</Typography>
            <Typography>$ {selectedCryto.high}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography color='gray'>LOW</Typography>
            <Typography>$ {selectedCryto.low}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography color='gray'>VOLUME</Typography>
            <Typography>{selectedCryto.volume}</Typography>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </>
    )
  } else {
    return (
      <Box className='flex justifyCenter'>
        <Typography variant='h5'>
          Select any crypto to see its detail.
        </Typography>
      </Box>
    )
  }
}
