import React from 'react'
import Portal from '../portal/portal'
import { UseOutsideClick } from '../useOusideClick/useoutsideclick';
import './sidebar.scss';

export const modalRight = ({
  Ref,
  Children,
  open = false,
  style = { maxHeight: `calc(100vh - 0px)`, width: '260px', top: `0px` },
  action= ()=> null,
}) => {

  // const Ref = useRef()
  UseOutsideClick(Ref, e => {
    if (open) {
      action(e)
    }
  })

  return (
    <Portal name="modal-sidebar">
      <div
        id='box-sidebar-right'
        ref={Ref}
        className={open ? 'open-sidebar' : ''}
        style={style}
      >
        {Children}
      </div>
    </Portal>
  )
}
