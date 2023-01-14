import React from 'react'
import '../../css/boton.css'
export const Boton = ({text, class_name , onClick,style}) => {
  
  const className = `btn ${class_name}`

  return (
    <button style={style} type='submit' onClick={onClick} id='boton' className={className}> {text}</button>
  )
}
