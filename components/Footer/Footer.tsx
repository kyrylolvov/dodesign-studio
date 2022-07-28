import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { ContactPaths, MenuPaths, SocialMediaPaths } from '../../utils/routes';

import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLogo,
  FooterSocialMediaLink,
  FooterSocialMediaIcon,
  FooterSocialMediaContainer,
} from './css';
import Button from '../Button/Button';

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <FooterContainer>
      <FooterLogo>© Do.Design</FooterLogo>
      <FooterLinksContainer>
        <Link href={MenuPaths.home}>
          <FooterLink active={router.pathname === MenuPaths.home}>Home</FooterLink>
        </Link>
        <Link href={MenuPaths.about}>
          <FooterLink active={router.pathname === MenuPaths.about}>About</FooterLink>
        </Link>
        <Link href={MenuPaths.projects}>
          <FooterLink active={router.pathname === MenuPaths.projects}>Projects</FooterLink>
        </Link>
        <Link href={MenuPaths.services}>
          <FooterLink active={router.pathname === MenuPaths.services}>Services</FooterLink>
        </Link>
        <Link href={MenuPaths.contact}>
          <FooterLink active={router.pathname === MenuPaths.contact}>Contact</FooterLink>
        </Link>
      </FooterLinksContainer>
      <FooterLinksContainer>
        <Link href={SocialMediaPaths.instagram} passHref>
          <FooterSocialMediaContainer>
            <FooterSocialMediaIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </FooterSocialMediaIcon>
            <FooterSocialMediaLink>Instagram</FooterSocialMediaLink>
          </FooterSocialMediaContainer>
        </Link>
        <Link href={SocialMediaPaths.behance} passHref>
          <FooterSocialMediaContainer>
            <FooterSocialMediaIcon>
              <FontAwesomeIcon icon={faBehance} />
            </FooterSocialMediaIcon>
            <FooterSocialMediaLink>Behance</FooterSocialMediaLink>
          </FooterSocialMediaContainer>
        </Link>
        <Link href={SocialMediaPaths.facebook} passHref>
          <FooterSocialMediaContainer>
            <FooterSocialMediaIcon>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </FooterSocialMediaIcon>
            <FooterSocialMediaLink>Facebook</FooterSocialMediaLink>
          </FooterSocialMediaContainer>
        </Link>
      </FooterLinksContainer>
      <FooterLinksContainer>
        <Link href={ContactPaths.email} passHref>
          <FooterSocialMediaContainer>
            <FooterSocialMediaLink>mail@dodesign.com</FooterSocialMediaLink>
          </FooterSocialMediaContainer>
        </Link>
        <Link href={ContactPaths.phone} passHref>
          <FooterSocialMediaContainer>
            <FooterSocialMediaLink>+1 437 345 2001</FooterSocialMediaLink>
          </FooterSocialMediaContainer>
        </Link>
        <Button style={{ marginTop: '24px' }} text="Request a call" />
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
