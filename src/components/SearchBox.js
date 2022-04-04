import React, { useState } from 'react'
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBox(props) {
  const { type, value, setValue } = props;

  const handleChange = (event) => {
    // console.log('SearchBox :: handleChange :: event ::', event.target.value);
    setValue(event.target.value);
  }

  return (
    <>
      <Box style={{ margin: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FormControl style={{ width: '95%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={type}
            value={value}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <AiOutlineSearch />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
      </Box>
    </>
  )
}
