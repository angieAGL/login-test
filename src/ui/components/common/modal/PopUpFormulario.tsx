import React from "react";
import Boton from "../grids/botones/Boton";
import PopUpBase from "./PopUpBase";

const PopUpFormulario = (
  mostrar: boolean,
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  mensaje: JSX.Element,
  idForm: string,
  titulo: string
) => {
  const botones: Array<JSX.Element> = [
    <Boton
      key={1}
      class_name={"btn-cerrar"}
      text={"Cancelar"}
      type={"button"}
      onClick={() => setMostrarPopUp(false)}
    />,
    <Boton key={3} text={"Guardar"} type={"submit"} form={idForm} />,
  ];

  return (
    <>
      <PopUpBase
        show={mostrar}
        titulo={titulo}
        mensaje={mensaje}
        botones={botones}
      ></PopUpBase>
    </>
  );
};

export default PopUpFormulario;
