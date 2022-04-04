import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { tradingPairs, fundingPairs } from './../store/action';

export default function HeightlighBox({ crypto }) {
  let name = crypto[0];
  let volume, latestPrice, dailyChange, high, low;

  if (name[0] === 't') {
    volume = Math.round(Number(crypto[8]))
    latestPrice = crypto[7].toFixed(2);
    dailyChange = crypto[6];
    high = crypto[9];
    low = crypto[10];
    name = `${name.substring(1, 4)} / ${name.substring(4, 7)}`
  } else if (name[0] === 'f') {
    volume = Math.round(Number(crypto[10]));
    latestPrice = crypto[9].toFixed(2);
    dailyChange = crypto[8];
    high = crypto[11];
    low = crypto[12];
    name = name.substring(1)
  } else {
    // unexpected crypto
  }



  return (
    <Box style={{ width: '100%' }} >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>{name} </Typography>
        <Typography>{latestPrice}</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>{volume}</Typography>
        <Typography>{dailyChange}</Typography>
      </div>
    </Box>
  )
}
