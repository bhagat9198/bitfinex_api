import { Card, CardActionArea, CardContent, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

export default function InfoCard(props) {
  const { heading, children } = props;
  return (
    <>
      <Box sx={{ m: 3 }}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {heading}
              </Typography>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                {children}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  )
}
