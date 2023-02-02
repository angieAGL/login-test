import React from "react";
import  Boton  from "./Boton";

const BotonBuscador = ({ text, onClick, class_name }:any) => {
  const className = `me-2 buscar_texto_btn ${class_name}`;

  return <Boton text={text} class_name={className} onClick={onClick}></Boton>;
};

export default BotonBuscador;
