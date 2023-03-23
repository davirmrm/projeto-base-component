import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, IcoEye, List } from '../../modules'

import jsoncomponent from './components.json'

export default () => {
  const dispatch = useDispatch()
  const json = jsoncomponent.List

  return (
    <div className='content'>
    <h3>List</h3>
    
    <List
        header={json.headDefault}
        data={json.contentDefault}
        listCustom={e => {
            let itens = e
            itens.acoes = (
                <div className='acoes'>
                    <Button color='primary' type='circle' action={() => null} title='Ver'>
                        <IcoEye />
                    </Button>
                </div>
            )
            return itens
        }}
    />
  </div>
  )
}
