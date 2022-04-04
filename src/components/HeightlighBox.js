import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function HeightlighBox({ name, volume, latestPrice, dailyChange }) {

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
