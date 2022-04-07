import { ListItemButton } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { cryptoSelected } from '../store/action';
import HeightlighBox from './HeightlighBox'

export default function EachListBtn(props) {
  const { completeName, selectedIndex, index, name, volume, latestPrice, dailyChange, setSelectedIndex, high, low } = props;
  const dispatch = useDispatch();

  const clickHandler = ({ index, name, volume, latestPrice, dailyChange, high, low }) => {
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


  return (
    <ListItemButton key={completeName}
      selected={selectedIndex === index}
      component="a"
      href={`#${name}`}
      onClick={() => clickHandler({ index, name, volume, latestPrice, dailyChange, high, low })}
      style={{ width: '100%' }}
    >
      <HeightlighBox name={name} volume={volume} latestPrice={latestPrice} dailyChange={dailyChange} />
    </ListItemButton>
  )
}
