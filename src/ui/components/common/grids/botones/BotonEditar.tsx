import React from 'react';
import {FaPen} from "react-icons/fa";
import "../../../../css/botonEditar.css";

type IBotonAccion={
  href:string, 
  onClick:(event: React.MouseEvent<HTMLAnchorElement>)=>void
}

export const BotonEditar = ({href, onClick}:IBotonAccion) => {
  
  return (
    <a className="editar" href={href} onClick={onClick} ><FaPen/></a>    
  )
}
