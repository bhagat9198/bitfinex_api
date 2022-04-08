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


export default function Home() {
  console.log('Home');
  const [value, setValue] = useState('');
  const [queryParams, setQueryParams] = useState('');

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
      <Box className="borderGrayBottom">
        <Header />
      </Box>
      <Grid container spacing={2} style={{ marginTop: 1, height: '90vh' }}>
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
