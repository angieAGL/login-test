import React from 'react';
import {FaPen} from "react-icons/fa";
import "../../../../css/botonEditar.css";
import {BotonAccion} from "../Interfaces/BotonesInterface";

export const BotonEditar = ({href, onClick}:BotonAccion) => {
  
  return (
    <a className="editar" href={href} onClick={onClick} ><FaPen/></a>    
  )
}
