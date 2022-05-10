import React from 'react'
import { SiderbarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SiderbarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Pizzas</SidebarLink>
            <SidebarLink to="/">Café</SidebarLink>
            <SidebarLink to="/">Menu Completo</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'>Peça Agora</SidebarRoute>
        </SideBtnWrap>
    </SiderbarContainer>
  );
};

export default Sidebar;