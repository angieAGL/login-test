import React from "react";
import Boton from "../grids/botones/Boton";
import PopUpBase from "./PopUpBase";

const PopUpCreacion = (
  mostrar: boolean,
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  mensaje: JSX.Element,
  idForm: string
) => {
  const botones: Array<JSX.Element> = [
    <Boton
      key={1}
      class_name={"btn-cerrar"}
      text={"Cancelar"}
      type={"button"}
      onClick={() => setMostrarPopUp(false)}
    />,
    <Boton key={3} text={"Agregar"} type={"submit"} form={idForm} />,
  ];

  return (
    <>
      <PopUpBase
        show={mostrar}
        titulo={"Agregar Demo"}
        mensaje={mensaje}
        botones={botones}
      ></PopUpBase>
    </>
  );
};

export default PopUpCreacion;
