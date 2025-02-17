import React from 'react';

import { Container } from './styles';

export default function Section({ background, textColor, children }) {
  return (
    <Container
      style={{
        backgroundColor: background,
        color: textColor,
      }}
    >
      <div className="content">{children}</div>
    </Container>
  );
}
