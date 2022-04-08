import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { BiBitcoin } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <>
      <AppBar position="static" className='appBar'>
        <Toolbar >
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <BiBitcoin />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" color='black' >
              Bitfinex API
            </NavLink>
          </Typography>
          <Button color="inherit" >
            <NavLink to="/docs" >
              Docs
            </NavLink >
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
