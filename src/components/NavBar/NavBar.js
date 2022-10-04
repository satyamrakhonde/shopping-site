import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CartWidget from '../cart/CartWidget';

import NavList from './NavList';


const NavBar = () => {
  const pages = ['Products', 'Accessories'];

  return (
    
      <AppBar position='static' sx={{ bgcolor: '#494949' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            
            <NavList pages={pages} />
            <Container maxWidth='xs' disableGutters>
             
            </Container>
            <CartWidget />
          </Toolbar>
        </Container>
      </AppBar>
    
  );
};

export default NavBar;