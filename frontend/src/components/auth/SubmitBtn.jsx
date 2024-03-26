import React from 'react'

const SubmitBtn = ({id, type,text, ...props}) => {
  return (
    <button id={id} type={type} className='signup-btn'>{text}</button>
  )
}

export default SubmitBtn
