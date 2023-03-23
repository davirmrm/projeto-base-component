import React from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../../helpers/history'
import { IcoChat, Menu } from '../../modules'
import jsoncomponent from './components.json'

export default () => {
  const dispatch = useDispatch()
  const menuList = [
    ...jsoncomponent.Menu, 
    {
      "id": "Contato",
      "label": "Contato",
      "icon": <IcoChat />,
      "go": ""
    }
  ]
  const actionMenu = e => {
    setTimeout(() => {
      history.goBack()
    }, 10000);
  }

  return (
    <div className='content'>
      <h3>Menu</h3>
      <Menu
        data={menuList}
        action={(e)=> actionMenu(e)}
      />   
    </div>
  )
}
