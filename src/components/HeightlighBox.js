import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function HeightlighBox({ name, volume, latestPrice, dailyChange }) {

  let dailyChangeUI;
  if (dailyChange > 0) {
    dailyChangeUI = < Typography color='green'> + {dailyChange}% </Typography>
  } else if (dailyChange < 0) {
    dailyChangeUI = < Typography color='red'> {dailyChange}% </Typography>
  } else {
    dailyChangeUI = < Typography color='gray'>  {dailyChange}% </Typography>
  }

  return (
    <Box className='width100' >
      <div className='flex justifySpaceBetween'>
        <Typography>{name} </Typography>
        <Typography>$ {latestPrice}</Typography>
      </div>
      <div className='flex justifySpaceBetween'>
        <Typography color='gray'>Vol : {volume}</Typography>
        {dailyChangeUI}
      </div>
    </Box>
  )
}
