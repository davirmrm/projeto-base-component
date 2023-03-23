import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Loading } from '../../modules'

export default () => {
  const dispatch = useDispatch()
  const [load, setLoad] = useState()

  const loadFull = e => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 3000);
  }

  return (
    <>
      <div className='content'>
        <h3>Loading full screnen</h3>
          <Button color='primary' action={()=> loadFull()}>Loading active</Button>  
          <Loading type='full' load={load} />        
      </div>
      <div className='content'>
        <h3>Loading element</h3>
          <Loading load={true} title='' />
      </div>
    </>
  )
}
