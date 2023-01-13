import React from 'react'
import '../../css/boton.css'
export const Boton = ({text, className, onClick,style}) => {
  return (
    <button style={style} type='submit' onClick={onClick} id='boton' className={className}> {text}</button>
  )
}
