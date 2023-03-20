import React from 'react'
import { useDispatch } from 'react-redux'
import { AddAlert, Button } from '../../modules'

export default () => {
  const dispatch = useDispatch()

  return (
    <div className='content'>
    <h3>Alerta</h3>
    <Button 
        color='primary'
        action={()=> 
            dispatch(AddAlert('primary', 'Mensagem para apresentar.'))
        }
    >
        Alerta primary
    </Button>
    <Button 
        color='secondary'
        action={()=> 
            dispatch(AddAlert('secondary', 'Mensagem para apresentar.'))
        }
    >
        Alerta secondary
    </Button>
    <Button 
        color='success'
        action={()=> 
            dispatch(AddAlert('success', 'Mensagem para apresentar.'))
        }
    >
        Alerta success
    </Button>
    <Button 
        color='warning'
        action={()=> 
            dispatch(AddAlert('warning', 'Mensagem para apresentar.'))
        }
    >
        Alerta warning
    </Button>
    <Button 
        color='danger'
        action={()=> 
            dispatch(AddAlert('danger', 'Mensagem para apresentar.'))
        }
    >
        Alerta danger
    </Button>
  </div>
  )
}
