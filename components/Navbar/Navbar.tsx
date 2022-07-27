import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  NavbarContainer, NavbarLink, NavbarLinksContainer, NavbarLogo,
} from './css';

const Navbar: React.FC = () => {
  const router = useRouter();

  const MenuPaths = {
    home: '/',
    about: '/about',
    projects: '/projects',
    services: '/services',
    contact: '/contact',
  };

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer scrollPosition={scrollPosition}>
      <NavbarLogo>Do.Design</NavbarLogo>
      <NavbarLinksContainer>
        <Link href={MenuPaths.home}>
          <NavbarLink active={router.pathname === MenuPaths.home}>Home</NavbarLink>
        </Link>
        <Link href={MenuPaths.about}>
          <NavbarLink active={router.pathname === MenuPaths.about}>About</NavbarLink>
        </Link>
        <Link href={MenuPaths.projects}>
          <NavbarLink active={router.pathname === MenuPaths.projects}>Projects</NavbarLink>
        </Link>
        <Link href={MenuPaths.services}>
          <NavbarLink active={router.pathname === MenuPaths.services}>Services</NavbarLink>
        </Link>
        <Link href={MenuPaths.contact}>
          <NavbarLink active={router.pathname === MenuPaths.contact}>Contact</NavbarLink>
        </Link>
      </NavbarLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
