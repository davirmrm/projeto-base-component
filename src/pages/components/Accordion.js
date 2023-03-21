import React from 'react'
import { useDispatch } from 'react-redux'
import { Accordion } from '../../modules'
import jsoncomponent from './components.json'

export default () => {
  const dispatch = useDispatch()

  return (
      <div className='content'>
        <h3>Accordeon</h3>
        <Accordion
            data={jsoncomponent.Accordion}
            tabSelect='0'
            actionTab={()=> null}
            type='custom'
            cy=''
        />
      </div>
  )
}
