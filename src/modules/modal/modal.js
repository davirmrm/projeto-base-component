import React from 'react';
import Portal from '../portal/portal';
import style from './modal.module.scss';
import { fullscreen } from './modalFulscreen';
import { modalNormal } from './modalNormal';

export const Modal = ({
  title='',
  children,
  open = false,
  close=()=> null,
  closeText = 'Fechar',
  size = 'medium',
  actions,
  cy=''
}) => {
  
  if (!Array.isArray(children)) {
    children = [children];
  }
  return (
    <Portal name={style.rootmodal}>
      {open
        ? size === 'fullscreen'
          ? fullscreen({ title, open, children, size, closeText, close, actions, cy })
          : modalNormal({ title, open, children, size, closeText, close, actions, cy })
        : null}
    </Portal>
  );
};