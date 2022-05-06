import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to='/'>SnackUno</NavLink>
            <NavIcon>
              <p>Menu</p>
              <Bars />
            </NavIcon>
        </Nav>
    </>
  )
}

export default Navbar;