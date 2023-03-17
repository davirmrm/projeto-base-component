import React from 'react';
import './button.scss';

export const Button = ({
  children,
  type = 'btn',
  color = 'default',
  variant = 'normal',
  size = 'medium',
  disabled = false,
  action = ()=> null,
  cy = '',
  ...props
}) => {
  return (
    <button
      {...props}
      data-cy={`Button${cy}`}
      className={props.className ? props.className : `${type} ${color} ${variant} ${size} `}
      disabled={disabled}
      onClick={action}
    >
      {children}
    </button>
  );
};
