import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function HeightlighBox() {
  return (
    <Box style={{ width: '100%' }} >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>BTC/UTC</Typography>
        <Typography>BTC/UTC</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>BTC/UTC</Typography>
        <Typography>BTC/UTC</Typography>
      </div>
    </Box>
  )
}
