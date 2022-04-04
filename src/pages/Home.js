import React, { useEffect, useState } from 'react'
import { AppBar, Container, Grid, IconButton, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BiBitcoin } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from '../components/SearchBox';
import HeightlighBox from '../components/HeightlighBox';
import { fetchCryptos, getqueryParams } from '../store/action';


export default function Home() {
  const [value, setValue] = useState('');
  const [queryParams, setQueryParams] = useState('');
  const [boxRefState, setBoxRefState] = useState(null);

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

  const allCryptosUi = () => {
    if (allCryptos.length > 0) {
      return allCryptos.map(crypto => (
        <ListItemButton component="a" href={`#${crypto[0]}`} style={{ width: '100%' }} >
          <HeightlighBox crypto={crypto} setBoxRefState={setBoxRefState} />
        </ListItemButton>
      ))
    } else {
      return <ListItemButton component="a" href="#not-found" style={{ width: '100%' }} >
        No Cryptos Found
      </ListItemButton>
    }
  }

  const selectedCryptoUI = () => {
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
            {selectedCryptoUI()}
          </Grid>
        </Grid>
      </div>
    </>
  )
}
