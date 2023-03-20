import React from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from '../../modules/alert/alert'
import Accordion from './Accordion'
import Alerts from './Alerts'
import Buttons from './Buttons'
import './components.scss'

export default () => {
  const dispatch = useDispatch()

  return (
    <div className='box-components'>
        <Alert />
        <h2 className='titulo'>Componentes</h2>
        <Accordion />
        <Alerts />
        <Buttons />
    </div>
  )
}
