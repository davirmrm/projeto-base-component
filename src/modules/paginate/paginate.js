import React, { useState } from 'react'
import style from './paginate.module.scss'
import { Button } from '../button/button'
// import { IcoArrowForward, IcoArrowBack, IcoSpinner } from '../icon'

const textDefault = {
  next: 'Next',
  before: 'Previous',
  reload: 'Update'
  // next: <IcoArrowForward />,
  // before: <IcoArrowBack />,
  // reload: <IcoSpinner />
}
const textDefaultInfo = '<<pageNumber>> of <<totalPages>> - <<totalElements>> Registers'

export const Paginate = ({ 
  data = { 
    pageNumber: 0, 
    totalPages: 1, 
    totalElements: 0 
  }, 
  action=()=> null, 
  text = textDefault,
  textInfo = textDefaultInfo,
}) => {
  const [paginateTemp, setPaginateTemp] = useState(String(data.pageNumber ? data.pageNumber : 1))

  const textInfoChange = e => {
    return  e
    .replace(`<<pageNumber>>`, data.pageNumber ? data.pageNumber + 1 : 1)
    .replace(`<<totalPages>>`, data.totalPages ? data.totalPages : 0)
    .replace(`<<totalElements>>`, data.totalElements ? data.totalElements : 0);
  }

  const changePaginate = event => {
    setPaginateTemp(event.target.value)
  }
  
  const reloadPaginate = event => {
    if (event || event === 0) {
      if (event <= data.totalPages) {
        setPaginateTemp(event + 1)
        action(event)
      }
    } else if (paginateTemp >= 1 && paginateTemp <= data.totalPages) {
      action(Number(paginateTemp - 1))
    } else {
      setPaginateTemp(data.pageNumber + 1)
    }
  }

  return (
    <div className={style['paginate-custom']}>
      <Button
        type='circle'
        color='primary'
        action={() => reloadPaginate(data.pageNumber - 1)}
        disabled={data.pageNumber === 0 ? true : false}
      >
        {text.before}
      </Button>
      <div className={style['page-item']}>
        <input type='number' name='paginate' value={paginateTemp} onChange={event => changePaginate(event)} />
        <Button
          type='circle'
          color='primary'
          action={() => reloadPaginate()}
          disabled={data.totalElements === 0 ? true : false}
        >
          {text.reload}
        </Button>
      </div>

      <Button
        type='circle'
        color='primary'
        action={() => reloadPaginate(data.pageNumber + 1)}
        disabled={data.pageNumber >= data.totalPages - 1 ? true : false}
      >
        {text.next}
      </Button>

      <span className={style['paginate-info']}>
        {textInfoChange(textInfo)}
      </span>
    </div>
  )
}
