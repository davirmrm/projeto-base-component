import React from 'react';
import { Button } from '../button/button';
import { IcoClose } from '../icon/close';
import style from './modal.module.scss';

export const modalNormal = ({
  title='', 
  size='medium',
  children, 
  closeText= 'Fechar', 
  close=()=> null, 
  actions, 
  cy=''
  
}) => {
  return (
    <div className={`${style[`box-modal`]} ${style.normal}`} data-cy={`Modal${cy}FullContainer`}>
      <div className={style[`size-${size}`]} data-cy={`Modal${size}${cy}Container`}>
        <div className={style["modal-header"]} data-cy={`Modal${size}${cy}Header`}>
          <div>{title}</div>
          <Button className={style["modal-close"]} onClick={close} title={closeText} cy={`Modal${size}${cy}Close`}>
            <IcoClose cy={`Modal${cy}`}/>
          </Button>
        </div>
        <div className={style["modal-content"]} data-cy={`Modal${size}${cy}ContentContainer`}>{children}</div>
        {actions ? (
          <div className={style["modal-actions"]} data-cy={`Modal${size}${cy}ActionsContainer`}>
            <Button color="secondary" variant="outline" onClick={close} cy={`Modal${size}${cy}Close`}>
              {closeText}
            </Button>
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
};