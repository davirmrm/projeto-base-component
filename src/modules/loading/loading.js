import React from 'react';
import Portal from '../portal/portal';
import style from './loading.module.scss';

export const Loading = ({
  type = 'element',
  load = false,
  title = 'Carregando',
  icon = <div className={style["loader-default"]} data-cy="LoadingIcon"></div>,
}) => {
  const loadingElement = (
    <div className={style["box-loading"]} data-cy="LoadingContainer">
      <div className={style["box-load"]}>
        {icon}
        {title ? <h5 data-cy="LoadingText">{title}</h5> : null}
      </div>
    </div>
  )
  return load ? 
  type === 'full' ? 
    ( 
      <Portal name={style.rootloading}>
        {loadingElement}
      </Portal>
    )
    : loadingElement
  : null
};
