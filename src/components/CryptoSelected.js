import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export default function CryptoSelected() {
  const storeState = useSelector(state => state.reducer);
  const selectedCryto = storeState.cryptoSelected;

  if (selectedCryto) {
    return (
      <>
        <Box style={{ borderBottom: '1px solid gray' }}>
          <Typography>{selectedCryto.name}</Typography>
          <div style={{ display: 'flex' }}>
            <Typography>{selectedCryto.latestPrice}</Typography>
            <Typography>{selectedCryto.dailyChange}</Typography>
          </div>
        </Box>
        <Box style={{ display: 'flex' }} >
          <div>
            <div>HIGH</div>
            <div>{selectedCryto.high}</div>
          </div>
          <div>
            <div>LOW</div>
            <div>{selectedCryto.low}</div>
          </div>
          <div>
            <div>VOLUME</div>
            <div>{selectedCryto.volume}</div>
          </div>
        </Box>
      </>
    )
  } else {
    return (
      <Box>
        select any crypto to see its detail.
      </Box>
    )
  }
}
