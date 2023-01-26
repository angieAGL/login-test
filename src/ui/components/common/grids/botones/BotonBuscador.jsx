import React from "react";
import { Boton } from "./Boton";

const BotonBuscador = ({ text, onClick }) => {
  return (
    <Boton
      text={text}
      class_name={"me-2 buscar_texto_btn "}
      onClick={onClick}
    ></Boton>
  );
};

export default BotonBuscador;
