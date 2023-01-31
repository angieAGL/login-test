import React from 'react';
import {  FaTrashAlt } from "react-icons/fa";
import "../../../../css/botonEliminar.css";

export const BotonEliminar = ({href, onClick}:any) => {
  
  return (
    <a className="eliminar" href={href} onClick={onClick} ><FaTrashAlt/></a>    
  )
}
