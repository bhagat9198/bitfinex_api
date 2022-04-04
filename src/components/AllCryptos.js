import { ListItemButton } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cryptoSelected } from '../store/action';
import HeightlighBox from './HeightlighBox'

export default function AllCryptos() {
  const storeState = useSelector(state => state.reducer);
  const allCryptos = storeState.cryptos;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dispatch = useDispatch();
  let name, volume, latestPrice, dailyChange, high, low;

  const clickHandler = (index) => {
    const cryptoData = {
      name,
      volume,
      latestPrice,
      dailyChange,
      high,
      low,
    }

    dispatch(cryptoSelected(cryptoData));
    setSelectedIndex(index);
  }

  if (allCryptos.length > 0) {
    return allCryptos.map((crypto, index) => {
      name = crypto[0];
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
      return (
        <ListItemButton selected={selectedIndex === index} component="a" href={`#${crypto[0]}`} onClick={() => clickHandler(index)} style={{ width: '100%' }} >
          <HeightlighBox name={name} volume={volume} latestPrice={latestPrice} dailyChange={latestPrice} />
        </ListItemButton>
      )
    })
  } else {
    return <ListItemButton component="a" href="#not-found" style={{ width: '100%' }} >
      No Cryptos Found
    </ListItemButton>
  }
}