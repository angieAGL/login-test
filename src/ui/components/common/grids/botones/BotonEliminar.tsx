import React from 'react';
import {  FaTrashAlt } from "react-icons/fa";
import "../../../../css/botonEliminar.css";

type IBotonAccion={
  href:string, 
  onClick:(event: React.MouseEvent<HTMLAnchorElement>)=>void
}

export const BotonEliminar = ({href, onClick}:IBotonAccion) => {
  
  return (
    <a className="eliminar" href={href} onClick={onClick} ><FaTrashAlt/></a>    
  )
}
