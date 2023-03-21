import React from 'react';
import style from'./button.module.scss';

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
      // className={props.className ? props.className : `${style[type]} ${style[type][variant]} ${style[type][variant][color]} ${style[type][size]} `} 
      // className={props.className ? props.className : `${type} ${variant} ${color} ${size} `}
      className={`${style[type]} ${style[variant]} ${style[color]} ${style[size]}`}
      onClick={action}
      {...props}
    >
      {children}
    </button>
  );
};
