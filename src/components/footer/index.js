import React from 'react';

import { Container } from './styles';

import logo from '~/assets/logo-vertical.png';

export default function Footer({ background, textColor, children }) {
  return (
    <Container style={{ backgroundColor: background, color: textColor }}>
      <div className="content">
        <img
          src={logo}
          className="logo"
          alt="Saullo.com"
          width="auto"
          height="auto"
        />
        <br />
        {children}
      </div>
    </Container>
  );
}
