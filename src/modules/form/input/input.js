import React from 'react';
import { validarCampo } from '../../validation/Validation';
import style from './input.module.scss';

export const Input = ({
  action = () => null,
  actionBlur = () => null,
  type = 'text',
  color = '',
  required,
  placeholder = '',
  cy="",
  label= "",
  name = "",
  value= "",
  left=null,
  right=null,
  ...props
}) => {
  if (required){
    const require = Object.keys(required);

  }
  const pattern = (e) => {
    if (typeof required?.pattern === 'object') {
      return JSON.stringify(required.pattern);
    } else if (typeof required?.pattern === 'string') {
      return required.pattern;
    } else {
      return '';
    }
  };

  const validar = (e) => {
    const v = require.length ? validarCampo(e) : {};
    action(e.target, v);
  };

  const validarOnblur = (e) => {
    const v = require.length ? validarCampo(e) : {};
    if (actionBlur) actionBlur(e.target, v);
  };

  return (
    <div
      className={`${style[`form-input`]} ${style[color]} ${required && (required.erro[name] ? style.erro : '')}`}
    >
      {label ? (
        <label className={style["label-input"]} htmlFor={`id-${name}`} data-cy={`FormLabel${name}${cy}`}>
          {required && require.length ? <span className='required-label'>*</span> : ''} 
          <span className={style['input-label-span-text']}>{label}</span>
        </label>
      ) : null}

      <div className={`${style[`input-${name}-wrapper`] } ${style[`input-wrapper`] }`}>
        {left ? <div className={style["input-actions-left"]}>{left}</div> : null}
        <input
          {...props}
          data-cy={`FormInput${name}${cy}`}
          id={`id-${name}`}
          type={type}
          name={name}
          value={value}
          onChange={(e) => validar(e)}
          onBlur={(e) => validarOnblur(e)}
          pattern={pattern('')}
          placeholder={placeholder}
        />
        {right ? <div className={style["input-actions"]}>{right}</div> : null}
      </div>
      {required && required.erro?.[name] ? (
        <span className={style["campo-obrigatorio"]} data-cy={`FormError${name}${cy}`}>{required.message}</span>
      ) : null}
    </div>
  );
};
