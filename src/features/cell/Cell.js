import React from 'react'
import './Cell.sass'

export function Cell ({ number }) {
  // const dispatch = useDispatch()

  return (
    <div className='Cell'>
      {number}
    </div>
  )
}
