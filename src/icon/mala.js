import React from 'react'

export const IcoMala = ({style={}, cy=''}) => {
  return (
    <svg className='icon-mala' viewBox="0 0 20 20" style={style} data-cy={`IcoMala${cy}`}>
      <path d="M12 4.5V2.5H8V4.5H12ZM2 6.5V17.5H18V6.5H2ZM18 4.5C19.11 4.5 20 5.39 20 6.5V17.5C20 18.61 19.11 19.5 18 19.5H2C0.89 19.5 0 18.61 0 17.5L0.00999999 6.5C0.00999999 5.39 0.89 4.5 2 4.5H6V2.5C6 1.39 6.89 0.5 8 0.5H12C13.11 0.5 14 1.39 14 2.5V4.5H18Z" fill="currentColor"/>
    </svg>
  )
}