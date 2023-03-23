import React from 'react';
import style from './checkbox.module.scss';

export const Checkbox = ({
  options,
  action,
  checked=[],
  label,
  name,
  type = 'checkbox',
  color = '',
  colorCustom = '',
  text = '',
  disabled = false,
  optionLabel = 'name',
  optionValue = 'id',
  optionRight = [],
  textRight = '',
  cy = '',
}) => {
  const veryfiCheck = (e) => {
    const verify = checked.filter((elem) => {
      return elem[optionValue] === e[optionValue] ? elem : null;
    });

    const res = checked.filter((elem) => {
      return elem[optionValue] !== e[optionValue] ? elem : null;
    });

    if (checked.length === 0) {
      return [e];
    } else {
      if (verify.length === 0) {
        return checked.concat(e);
      } else {
        return res;
      }
    }
  };

  const checkedAction = (e) => {
    console.log(e, 'checkedAction', checked);
    if (e !== undefined) {
      let respost = {name, value: e}
      if (options) {
      const resp = options ? (e ? veryfiCheck(e) : []) : e;
      console.warn('resp', resp);
      const fullResponse = {name, value: [...checked, ...resp], type: type, id: cy }
      respost = fullResponse
      }
      console.log(respost, 'respost');
      action && action(respost);
    }
  };

  const veryfiChecked = (e) => {
    if (!options) {
      return checked[optionValue] === e[optionValue] ? true : false;
    } else {
      if (checked.length === 0) {
        return false;
      } else {
        console.log(checked, 'checked');
        const verify = checked?.filter((elem) => {
          return elem[optionValue] === e[optionValue] ? elem : null;
        });

        if (verify.length === 0) {
          return false;
        } else {
          return (verify[0] && verify[0][optionValue]) === e[optionValue]
            ? true
            : false;
        }
      }
    }
  };

  return (
    <div
      className={`${style[`form-checkbox`]} ${style[type]} ${style[color]} ${style[`${ disabled ? 'disabled' : ''}`]}`}
    >
      {label ? <label htmlFor={`id-${name}`} data-cy={`FormCheckbox${name}${cy}`}>{label}</label> : null}
      {options ? (
        options?.map((c, index) => {
          return (
            <div key={`checkbox-${name}-${index}`} className={style[`${name}-wrapper`]}>
              <div
                key={`${name}-${c[optionValue]}`}
                className={`${style[`check-box`]} ${style[`${veryfiChecked(c) ? 'checked' : ''}`]}`}
                onClick={() => checkedAction(!disabled ? c : null)}
                data-cy={`FormCheckbox${name}Optionclick${c[optionValue]}${cy}`}
              >
                <span
                  className={style[type]}
                  style={
                    veryfiChecked(c) && (colorCustom || c.color)
                      ? {
                          backgroundColor: colorCustom
                            ? colorCustom
                            : c.color,
                        }
                      : {}
                  }
                  data-cy={`FormCheckbox${name}Label${c[optionLabel]}`}
                ></span>
                {c[optionLabel]}
              </div>
              {c.right ? optionRight : null} {c.textRight ? textRight : null}
            </div>
          );
        })
      ) : (
        <div
          className={`${style['check-box']} ${checked ? style.checked : ''}`}
          onClick={() => checkedAction(!disabled ? !checked : false)}
          data-cy={`FormCheckbox${name}Optionclick${cy}`}
        >
          <span
            className={style[type]}
            style={
              checked && colorCustom ? { backgroundColor: colorCustom } : {}
            }
            data-cy={`FormCheckbox${name}Label${cy}`}
          ></span>
          {text}
        </div>
      )}
    </div>
  );
};
