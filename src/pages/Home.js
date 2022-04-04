import React from 'react'
import { AppBar, Container, Grid, IconButton, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import { BiBitcoin } from 'react-icons/bi'
import SearchBox from '../components/SearchBox';
import HeightlighBox from '../components/HeightlighBox';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <>
      <div>
        <Box style={{ borderBottom: '2px solid gray' }}>
          <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
            <Toolbar >
              <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
                <BiBitcoin />
              </IconButton>
              <Typography variant="h6" component="div">
                Bitfinex API
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Grid container spacing={2} style={{ minHeight: '90vh', marginTop: 1 }}>
          <Grid item xs={12} md={3} style={{ borderRight: '2px solid gray' }} >
            <SearchBox type='text' />
            <ListItemButton component="a" href="#simple-list" style={{ width: '100%' }} >
              <HeightlighBox />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <HeightlighBox />
            </ListItemButton>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box style={{ borderBottom: '1px solid gray' }}>
              <Typography>BTC/UTC</Typography>
              <div style={{ display: 'flex' }}>
                <Typography>BTC/UTC</Typography>
                <Typography>BTC/UTC</Typography>
              </div>
            </Box>
            <Box style={{ display: 'flex' }} >
              <div>
                <div>HIGH</div>
                <div>HIGH</div>
              </div>
              <div>
                <div>LOW</div>
                <div>LOW</div>
              </div>
              <div>
                <div>VOLUME</div>
                <div>VOLUME</div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
