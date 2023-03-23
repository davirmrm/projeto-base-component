import React from 'react'
import { useDispatch } from 'react-redux'
import { Paginate } from '../../modules'

export default () => {
  const dispatch = useDispatch()
  return (
    <div className='content'>
      <h3>Paginate</h3>
      <Paginate 
      />
    </div>
  )
}
