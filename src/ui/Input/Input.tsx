import React from 'react'
import './styles.scss'

interface InputProps {
  type?: string;
  placeholder: string
}

const Input = ({ type = 'text', placeholder}: InputProps) => {
  return (
    <div className='inputWrap'>
      <input type={type}  className='inputWrap__input' placeholder={placeholder}/>
    </div>
  )
}

export default Input