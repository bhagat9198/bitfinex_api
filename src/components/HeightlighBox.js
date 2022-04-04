import React, { useRef } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { tradingPairs, fundingPairs, cryptoSelected } from './../store/action';
import { useDispatch } from 'react-redux';

export default function HeightlighBox({ crypto, setBoxRefState }) {
  let name = crypto[0];
  let volume, latestPrice, dailyChange, high, low;
  const dispatch = useDispatch();
  const boxRef = useRef(null);

  if (name[0] === 't') {
    volume = Math.round(Number(crypto[8]))
    latestPrice = crypto[7].toFixed(2);
    dailyChange = crypto[6];
    high = crypto[9];
    low = crypto[10];
    name = `${name.substring(1, 4)} / ${name.substring(4, 7)}`
  } else if (name[0] === 'f') {
    volume = Math.round(Number(crypto[10]));
    latestPrice = crypto[9].toFixed(2);
    dailyChange = crypto[8];
    high = crypto[11];
    low = crypto[12];
    name = name.substring(1)
  } else {
    // unexpected crypto
  }


  const clickHandler = () => {
    const cryptoData = {
      name,
      volume,
      latestPrice,
      dailyChange,
      high,
      low,
    }

    dispatch(cryptoSelected(cryptoData));
    console.log(boxRef.current);
    setBoxRefState(prevRefState => {
      if (prevRefState) {
        prevRefState.parentElement.style.backgroundColor = 'white';
        prevRefState.style.backgroundColor = 'white';
      }
      boxRef.current.parentElement.style.backgroundColor = 'gray';
      boxRef.current.style.backgroundColor = 'gray';
      return boxRef.current;
    })
  }

  return (
    <Box style={{ width: '100%' }} onClick={clickHandler} ref={boxRef} >
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
