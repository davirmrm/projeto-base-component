import React from 'react';
import { Button } from '../button/button';
import style from './modal.module.scss';

export const fullscreen = ({ 
  title='', 
  children, 
  closeText= 'Fechar', 
  close=()=> null, 
  actions, 
  cy=''
}) => {
  return (
    <div className={`${style[`box-modal`]} ${style.fullscreen}`} data-cy={`ModalFullScreenFullContainer${cy}`}>
      <div className={style["modal-header"]} data-cy={`ModalFullScreen${cy}Header`}>
        {title}
        {actions ? (
          <div className={style["modal-actions"]} data-cy={`ModalFullScreen${cy}Actions`}>
            <Button color="secondary" variant="outline" onClick={close} cy={`ModalFullScreenClose${cy}`}>
              {closeText}
            </Button>
            {actions}
          </div>
        ) : null}
      </div>
      <div className={style["modal-content"]} data-cy={`Modal${cy}ContentContainer`}>{children}</div>
    </div>
  );
};