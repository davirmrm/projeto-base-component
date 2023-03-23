import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../../helpers/history'
import { Button, Modal } from '../../modules'

export default () => {
  const dispatch = useDispatch()
  const [ modal, setModal] = useState({
    open:false,

    title:<h3>davi</h3>,
    content:<div>Conteudo da modal</div>,
    size:'medium',
  })
  
  const actionModal = e => {
    setModal({
      ...e,
      open:true
    })
  }
  const actionModalClose = e => {
    setModal({
      ...modal,
      open:false
    })
  }
  
  return (
    <div className='content'>
      <h3>Modal</h3>
      <Button 
        color='primary' 
        action={()=> actionModal({
          title:<h3>Modal pequena</h3>,
          content:<div>Conteudo da modal pequena</div>,
          size:'small',
        })}
      >Modal pequena</Button>  
      <Button 
        color='primary' 
        action={()=> actionModal({
          title:<h3>Modal media</h3>,
          content:<div>Conteudo da modal media</div>,
          size:'medium',
        })}
      >Modal media</Button>
      <Button 
        color='primary' 
        action={()=> actionModal({
          title:<h3>Modal grande</h3>,
          content:<div>Conteudo da modal grande</div>,
          size:'large',
        })}
      >Modal grande</Button> 
      <Button 
        color='primary' 
        action={()=> actionModal({
          title:<h3>Modal fullScreen</h3>,
          content:<div>Conteudo da modal fullScreen</div>,
          size:'fullscreen',
        })}
      >Modal fullScreen</Button>  

      <Modal
        title={modal.title}
        open={modal.open}
        size={modal.size}
        close={()=> actionModalClose()}
        actions={
          <Button color='primary' action={()=> actionModalClose()}>Gostei</Button>
        }
      >
        {modal.content}
      </Modal>
    </div>
  )
}
