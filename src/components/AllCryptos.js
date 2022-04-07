import { ListItemButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import EachListBtn from './EachListBtn';

export default function AllCryptos() {
  const storeState = useSelector(state => state.reducer);
  const allCryptos = storeState.cryptos;
  const [selectedIndex, setSelectedIndex] = useState(null);

  let name, volume, latestPrice, dailyChange, high, low;



  if (allCryptos.length > 0) {
    return allCryptos.map((crypto, index) => {
      name = crypto[0];
      const completeName = name;
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
        <EachListBtn
          completeName={completeName}
          selectedIndex={selectedIndex}
          index={index} name={name} volume={volume}
          latestPrice={latestPrice}
          dailyChange={dailyChange}
          setSelectedIndex={setSelectedIndex}
          high={high} low={low}
        />
      )
    })
  } else {

    return (
      <ListItemButton component="div" className='cursorDefault width100' >
        <Typography variant='h6'> No Cryptos Found </Typography>
      </ListItemButton>
    )
  }
}