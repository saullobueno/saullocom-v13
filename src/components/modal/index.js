import React from 'react';

import { ModalView } from './styles';

export default function Modal({ imagemodal, slug, title, description, job }) {
  return (
    <ModalView id={slug}>
      <a href={'#_'}>
        <img src={imagemodal} alt={slug} />
      </a>
    </ModalView>
  );
}
