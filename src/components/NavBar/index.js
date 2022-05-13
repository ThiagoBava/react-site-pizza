import React from 'react';
import { Nav, NavLink, NavIcon} from './NavbarElements';
import * as FaIcons from 'react-icons/fa';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to='/'>SnackUno</NavLink>
            <NavIcon>
            <FaIcons.FaBars onClick={toggle} />
            </NavIcon>
        </Nav>
    </>
  )
}

export default Navbar;