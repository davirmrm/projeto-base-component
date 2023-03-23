import React from 'react'
import { useDispatch } from 'react-redux'
import { Tab } from '../../modules'
import jsoncomponent from './components.json'

export default () => {
  const dispatch = useDispatch()
  return (
    <div className='content'>
      <h3>Tab</h3>
      <Tab 
        data={jsoncomponent.Tab}
      />
      <Tab 
        data={jsoncomponent.Tab}
        type='box'
      />
    </div>
  )
}
