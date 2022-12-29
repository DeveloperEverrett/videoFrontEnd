import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background:
          'radial-gradient(circle at 5% 11%, rgba(34, 40, 49, 1) 8%, rgba(48, 71, 94, 1) 100%);',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={150} width={150} />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
