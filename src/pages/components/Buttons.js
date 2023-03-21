import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, IcoClose } from '../../modules'

export default () => {
  const dispatch = useDispatch()

  return (
    <div className='content'>
    <h3>Button</h3>
    <div className='grupo-botao'>
        <Button color='primary'>Botão primary</Button>
        <Button color='secondary'>Botão secondary</Button>
        <Button color='warning'>Botão warning</Button>
        <Button color='danger'>Botão danger</Button>
        <Button color='success'>Botão success</Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' variant='outline'>
          Botão primary
        </Button>
        <Button color='secondary' variant='outline'>
          Botão secondary
        </Button>
        <Button color='warning' variant='outline'>
          Botão warning
        </Button>
        <Button color='danger' variant='outline'>
          Botão danger
        </Button>
        <Button color='success' variant='outline'>
          Botão success
        </Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' variant='outlined'>
          Botão primary
        </Button>
        <Button color='secondary' variant='outlined'>
          Botão secondary
        </Button>
        <Button color='warning' variant='outlined'>
          Botão warning
        </Button>
        <Button color='danger' variant='outlined'>
          Botão danger
        </Button>
        <Button color='success' variant='outlined'>
          Botão success
        </Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' type='link'>
          Botão primary
        </Button>
        <Button color='secondary' type='link'>
          Botão secondary
        </Button>
        <Button color='warning' type='link'>
          Botão warning
        </Button>
        <Button color='danger' type='link'>
          Botão danger
        </Button>
        <Button color='success' type='link'>
          Botão success
        </Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' type='link' variant='outlined'>
          Botão primary
        </Button>
        <Button color='secondary' type='link' variant='outlined'>
          Botão secondary
        </Button>
        <Button color='warning' type='link' variant='outlined'>
          Botão warning
        </Button>
        <Button color='danger' type='link' variant='outlined'>
          Botão danger
        </Button>
        <Button color='success' type='link' variant='outlined'>
          Botão success
        </Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' type='circle'>
          <IcoClose />
        </Button>
        <Button color='secondary' type='circle'>
          <IcoClose />
        </Button>
        <Button color='warning' type='circle'>
          <IcoClose />
        </Button>
        <Button color='danger' type='circle'>
          <IcoClose />
        </Button>
        <Button color='success' type='circle'>
          <IcoClose />
        </Button>

        <Button color='primary' type='circle' variant='outlined'>
          <IcoClose />
        </Button>
        <Button color='secondary' type='circle' variant='outlined'>
          <IcoClose />
        </Button>
        <Button color='warning' type='circle' variant='outlined'>
          <IcoClose />
        </Button>
        <Button color='danger' type='circle' variant='outlined'>
          <IcoClose />
        </Button>
        <Button color='success' type='circle' variant='outlined'>
          <IcoClose />
        </Button>

        <Button color='primary' type='circle' variant='outline'>
          <IcoClose />
        </Button>
        <Button color='secondary' type='circle' variant='outline'>
          <IcoClose />
        </Button>
        <Button color='warning' type='circle' variant='outline'>
          <IcoClose />
        </Button>
        <Button color='danger' type='circle' variant='outline'>
          <IcoClose />
        </Button>
        <Button color='success' type='circle' variant='outline'>
          <IcoClose />
        </Button>
      </div>
  </div>
  )
}
