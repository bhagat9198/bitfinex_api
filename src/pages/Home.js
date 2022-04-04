import React, { useEffect, useState } from 'react'
import { AppBar, Container, Grid, IconButton, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BiBitcoin } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from '../components/SearchBox';
import HeightlighBox from '../components/HeightlighBox';
import { fetchCryptos } from '../store/action';


export default function Home() {
  const [value, setValue] = useState('');

  const storeState = useSelector(state => state.reducer);
  const allCryptos = storeState.cryptos;
  // console.log('Home :: allCryptos :: ', allCryptos, storeState);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(fetchCryptos(value))
    }, 5000)
  }, [value])

  const allCryptosUi = () => {
    if (allCryptos.length > 0) {
      return allCryptos.map(crypto => (
        <ListItemButton component="a" href="#simple-list" style={{ width: '100%' }} >
          <HeightlighBox crypto={crypto} />
        </ListItemButton>
      ))
    } else {
      return <ListItemButton component="a" href="#simple-list" style={{ width: '100%' }} >
        'No Cryptos Found'
      </ListItemButton>
    }
  }
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
            <SearchBox type='text' value={value} setValue={setValue} />
            {allCryptosUi()}
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
