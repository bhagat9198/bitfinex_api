import React, { useEffect, useState } from 'react'
import { AppBar, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from '../components/SearchBox';
import HeightlighBox from '../components/HeightlighBox';
import { fetchCryptos, getqueryParams } from '../store/action';
import AllCryptos from '../components/AllCryptos';
import CryptoSelected from '../components/CryptoSelected';
import Header from '../components/Header';
import { toast } from 'react-toastify';


export default function Home() {
  console.log('Home');
  const [value, setValue] = useState('');
  const [queryParams, setQueryParams] = useState('');
  const storeState = useSelector(state => state.reducer);
  const allCryptos = storeState.cryptos;
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
    const subscriber = setInterval(async () => {
      // console.log('Home :: queryParams :: ', queryParams);
      const res = await dispatch(fetchCryptos(queryParams))
      console.log('Home :: res :: ', res);
      if (!res.status) {
        console.log('Home :: res :: ', res);
        toast.error(res.message)
      }
    }, 5000)
    return () => clearInterval(subscriber);
  }, [queryParams])

  useEffect(() => {
    if (!allCryptos) {
      toast.warning("Please Wait. Fetching Cryptos.")
    }
  }, [])

  useEffect(() => {
    if (allCryptos && allCryptos.length === 0) {
      toast.error("Please try with differnt search.")
    }
  }, [allCryptos])

  return (
    <>
      <Box className="borderGrayBottom">
        <Header />
      </Box>
      <Grid container spacing={2} style={{ marginTop: 1, height: '88vh' }} className="borderGrayBottom">
        <Grid item xs={12} md={3} className='borderGrayRight displayCryptos' >
          <SearchBox type='text' value={value} setValue={setValue} />
          <AllCryptos />
        </Grid>
        <Grid item xs={12} md={9}>
          <CryptoSelected />
        </Grid>
      </Grid>
    </>
  )
}
