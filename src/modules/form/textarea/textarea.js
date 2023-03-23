import React from 'react';
import { validarCampo } from '../../validation/Validation';
import style from './textarea.module.scss';

export const Textarea = ({
  action = () => null,
  actionBlur = () => null,
  color = '',
  required,
  placeholder = '',
  cy="",
  label= "",
  name = "",
  value= "",
  left=null,
  right=null
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
      className={`${style['form-textarea']} ${style[color]} ${
        required && (required.erro[name] ? style.erro : '')
      } `}
    >
      {label ? (
        <label className="label-input" htmlFor={`id-${name}`} data-cy={`FormLabel${name}${cy}`}>
          {required && require.length ? <span className='required-label'>*</span> : ''} 
          <span className='input-label-span-text'>{label}</span>
        </label>
      ) : null}

      <div className={`input-${name}-wrapper input-wrapper`}>
        {left ? <div className="input-actions-left">{left}</div> : null}
        <textarea
          data-cy={`FormInput${name}${cy}`}
          id={`id-${name}`}
          name={name}
          onChange={(e) => validar(e)}
          onBlur={(e) => validarOnblur(e)}
          pattern={pattern('')}
          placeholder={placeholder}
          defaultValue={value}
        />
        {right ? <div className="input-actions">{right}</div> : null}
      </div>
      {required && required.erro?.[name] ? (
        <span className="campo-obrigatorio" data-cy={`FormError${name}${cy}`}>{required.message}</span>
      ) : null}
    </div>
  );
};
