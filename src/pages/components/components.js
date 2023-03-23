import React from 'react'
import { useDispatch } from 'react-redux'

import './components.scss'

import { Alert } from '../../modules/alert/alert'
import Accordion from './Accordion'
import Alerts from './Alerts'
import Buttons from './Buttons'
import List from './List'
import Loading from './Loading'
import Menu from './Menu'
import Modal from './Modal'
import Paginate from './Paginate'
import Tab from './Tab'
import Form from './Form'

export default () => {
  const dispatch = useDispatch()

  return (
    <div className='container-Components'>
      <div className='box-components'>
          <Alert />
          <h2 className='titulo'>Componentes</h2>
          <Accordion />
          <Alerts />
          <Buttons />
          <List />
          <Loading />
          <Menu />
          <Modal />
          <Paginate />
          <Tab />
          <h3>Form</h3>
          <Form />
      </div>
    </div>
  )
}
