import React from 'react';
import style from './button.scss';

export const Button = ({
  children,
  type = 'btn',
  color = 'default',
  variant = 'normal',
  size = 'medium',
  action = ()=> null,
  cy = '',
  ...props
}) => {
  return (
    <button
      data-cy={`Button${cy}`}
      className={props.className ? props.className : `${style[type]} ${style[type][variant]} ${style[type][variant][color]} ${style[type][size]} `}
      onClick={action}
      {...props}
    >
      {children}
    </button>
  );
};
