import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Portal from '../portal/portal';
import style from'./alert.module.scss';

import { IcoClose } from '../icon/icon';
import { RemoveAlert } from './actions';
import { Button } from '../button/button';
export * from './actions';

export const Alert = () =>{
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts);

  return (
    <Portal name={style.rootalert}>
    <>
      {alerts?.map((alert) => {
        setTimeout(
          function () {
            dispatch(RemoveAlert(alert.id))
          },
          alert.time ? alert.time : 3000
        );
        return (
          <div key={alert.id} className={`${style['box-alert']} ${style[alert.type]}`} data-cy={`Alert${alert.id}`}>
            <div dangerouslySetInnerHTML={{ __html: alert.mensage }} data-cy={`Alert${alert.id}Message`}></div>
            <Button
              className={style.close}
              action={() => dispatch(RemoveAlert(alert.id))}
              cy={`Alert${alert.id}Close`}
            >
              <IcoClose cy={`Alert${alert.id}`}/>
            </Button>
          </div>
        );
      })}
      </>
    </Portal>
  );
}
