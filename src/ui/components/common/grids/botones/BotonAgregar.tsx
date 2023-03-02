import React, { useState } from "react";
import Boton from "./Boton";
import { BotonInterface } from "../Interfaces/BotonesInterface";
import PopUpInformativo from "../../modal/PopUpInformativo";

const BotonAgregar = ({ text, class_name }: BotonInterface) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);

  return (
    <>
      <Boton
        type="button"
        text={text}
        class_name={`me-2 ${class_name}`}
        onClick={() => setMostrarPopUp(true)}
      ></Boton>
      {PopUpInformativo(mostrarPopUp, setMostrarPopUp, "hola")}
    </>
  );
};

export default BotonAgregar;
