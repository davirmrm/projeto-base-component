import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Checkbox, IcoEye, IcoEyeBlocked, Input, RadioButton, Select, Textarea } from '../../modules'
import jsoncomponent from './components.json'

export default () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    selectOptions: jsoncomponent.Select,
    idpasswordType: false,
    idText: '',
    idNumber: '',
    idpassword: '',
    idinfo: '',
    select: '',
    selectMult: [],
    checkboxg: [],
    radio:{},
  })

  const changeHAndle = e => {
    console.log('changeHAndle', e);
    setForm({
      ...form,
      [e.name]: e.value
    })
  }
console.warn(form);
  return (
    <>
      <div className='content'>
        <h3>Input</h3>
        <Input
          name='idText'
          label='Input de texto'
          action={(e)=> changeHAndle(e)}
          value={form.idText}
        />
        <Input
          name='idNumber'
          label='Input de numero'
          action={(e)=> changeHAndle(e)}
          value={form.idNumber}
          type='number'
        />
        <Input
          name='idpassword'
          label='Input de password'
          action={(e)=> changeHAndle(e)}
          value={form.idpassword}
          type={form.idpasswordType?'text': 'password'}
          right={
            <>
              <Button color='primary' type='circle' action={() => changeHAndle({name: 'idpasswordType', value: !form.idpasswordType})} title='Ver'>
                {form.idpasswordType?<IcoEyeBlocked />:<IcoEye />}
                
              </Button>
            </>
          }
        />
        <Input
          name='idinfo'
          label='Input de informativo'
          action={(e)=> changeHAndle(e)}
          value={form.idinfo}
          left='R$ '
        />
      </div>
      <div className='content'>
        <h3>Select</h3>
        
        <Select
          label='label select '
          name='select'
          action={e => changeHAndle(e)}
          actionFilter={(e)=> changeHAndle({name: 'selectOptions', value: jsoncomponent.Select.filter(f=> f.name.toLowerCase().indexOf(e.value.toLowerCase()) != -1)})}
          options={form.selectOptions}
          selected={form.select}
          filter
        />
        
        <Select
          label='label select mult '
          name='selectMult'
          action={e => changeHAndle(e)}
          actionFilter={(e)=> changeHAndle({name: 'selectOptions', value: jsoncomponent.Select.filter(f=> f.name.toLowerCase().indexOf(e.value.toLowerCase()) != -1)})}
          options={form.selectOptions}
          selected={form.selectMult}
          filter
          multiSelect
        />
      </div>
      <div className='content'>
        <h3>Checkbox</h3>
        <Checkbox
          label='label checkbox'
          name='checkbox'
          action={e => changeHAndle(e)}
          checked={form.checkbox}
          text={form.checkbox ? 'Ativo' : 'Inativo'}
        />

        {/* <Checkbox
          label='label checkbox group'
          name='checkboxg'
          action={e => changeHAndle(e)}
          checked={form.checkboxg}
          options={jsoncomponent.Checbox}
        /> */}

        <Checkbox
          label='label checkbox Switch'
          type='switch'
          name='checkboxSwitch'
          action={e => changeHAndle(e)}
          checked={form.checkboxSwitch}
          text={form.checkboxSwitch ? 'Ativo' : 'Inativo'}
        />
        
      </div>
      <div className='content'>
        <h3>RadioButton</h3>
        <RadioButton
          label='label radio'
          name='radio'
          action={e => changeHAndle(e)}
          checked={form.radio}
          options={jsoncomponent.Radiobutton}
        />
      </div>
      <div className='content'>
        <h3>Textarea</h3>
        <Textarea
          name='idTextarea'
          label='Input de textarea'
          action={(e)=> changeHAndle(e)}
          value={form.idTidTextareaext}
        />
      </div>
      
    </>
  )
}
