import React from "react";
import Boton from "../grids/botones/Boton";
import PopUpBase from "./PopUpBase";

const PopUpConfirmacion = (
  mostrar: boolean,
  mensaje: string,
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  funcion: (id: number) => void,
  id: number
) => {
  const boton: Array<JSX.Element> = [
    <Boton
      key={1}
      class_name={"btn-cerrar"}
      text={"Cerrar"}
      type={"button"}
      onClick={() => setMostrarPopUp(false)}
    />,
    <Boton
      key={2}
      text={"Aceptar"}
      type={"button"}
      onClick={() => {
        funcion(id);
        setMostrarPopUp(false);
      }}
    />,
  ];

  return (
    <>
      <PopUpBase show={mostrar} mensaje={mensaje} botones={boton}></PopUpBase>
    </>
  );
};

export default PopUpConfirmacion;
