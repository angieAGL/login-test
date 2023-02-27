import React from "react";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import { useState } from "react";
import PopUpConfirmacion from "../../common/modal/PopUpConfirmacion";
import { Demo } from "../../../../dominio/entidades/Demo";

export const Eliminar = (id: number, data: Demo[], setData: any) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const mensaje = "¿Esta seguro que quiere eliminar ?";
  const eliminar = (id: number) => {
    setMostrarPopUp(true);
    const datacopy = [...data];
    datacopy[id].activo = false;
    setData(datacopy);
  };
  return (
    <div>
      <BotonEliminar
        href="#"
        onClick={() => {
          setMostrarPopUp(true);
        }}
      ></BotonEliminar>
      {PopUpConfirmacion(mostrarPopUp, mensaje, setMostrarPopUp, eliminar, id)}
    </div>
  );
};
