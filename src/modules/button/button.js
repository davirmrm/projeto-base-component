import React from 'react';
// import './button.scss';
import { ButtonBGI } from  './styled';

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
    <ButtonBGI
      data-cy={`Button${cy}`}
      type={type}
      color={color}
      variant={variant}
      size={size}
      
      // className={props.className ? props.className : `${type} ${color} ${variant} ${size} `}
      onClick={action}
      {...props}
    >
      {children}
    </ButtonBGI>
  );
};
