import React from 'react';

import {
  NavbarContainer, NavbarLink, NavbarLinksContainer, NavbarLogo,
} from './css';

const Navbar: React.FC = () => (
    <NavbarContainer>
        <NavbarLogo>Do.Design</NavbarLogo>
        <NavbarLinksContainer>
            <NavbarLink href="/about">About</NavbarLink>
        </NavbarLinksContainer>
    </NavbarContainer>
);

export default Navbar;
