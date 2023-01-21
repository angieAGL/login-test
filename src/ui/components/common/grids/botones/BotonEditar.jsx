import React from 'react';
import {FaPen} from "react-icons/fa";
import "../../../../css/botonEditar.css";

export const BotonEditar = ({href, onClick}) => {
  
  return (
    <a className="editar" href={href} onClick={onClick} ><FaPen/></a>    
  )
}
