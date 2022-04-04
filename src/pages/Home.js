import React, { useEffect, useState } from 'react'
import { AppBar, Container, Grid, IconButton, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BiBitcoin } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from '../components/SearchBox';
import HeightlighBox from '../components/HeightlighBox';
import { fetchCryptos, getqueryParams } from '../store/action';
import AllCryptos from '../components/AllCryptos';
import CryptoSelected from '../components/CryptoSelected';


export default function Home() {
  const [value, setValue] = useState('');
  const [queryParams, setQueryParams] = useState('');

  const storeState = useSelector(state => state.reducer);
  const allCryptos = storeState.cryptos;
  const selectedCryto = storeState.cryptoSelected;
  const dispatch = useDispatch();

  useEffect(() => {
    async function getQuery() {
      return await dispatch(getqueryParams(value));
    }
    getQuery().then(res => {
      setQueryParams(res);
    })
  }, [value])

  useEffect(() => {
    const subscriber = setInterval(() => {
      console.log('queryParams :: ', queryParams);
      dispatch(fetchCryptos(queryParams))
    }, 5000)
    return () => clearInterval(subscriber);
  }, [queryParams])

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
            <AllCryptos />
          </Grid>
          <Grid item xs={12} md={9}>
            <CryptoSelected />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
