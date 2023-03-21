import React from 'react';
import './button.scss';

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
      className={props.className ? props.className : `${type} ${color} ${variant} ${size} `}
      onClick={action}
      {...props}
    >
      {children}
    </button>
  );
};
