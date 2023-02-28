import React from "react";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import { useState } from "react";
import { Demo } from "../../../../dominio/entidades/Demo";

export const BotonEliminarDemo = (
  id: number,
  data: Demo[],
  setData: React.Dispatch<React.SetStateAction<Demo[]>>
) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const mensaje = "¿Esta seguro que quiere eliminar ?";
  const eliminar = (id: number) => {
    const datacopy = [...data];
    datacopy[id].activo = false;
    setData(datacopy);
  };
  return (
    <>
      <BotonEliminar
        href="#"
        onClick={() => {
          setMostrarPopUp(true);
        }}
        mostrarPopUp={mostrarPopUp}
        mensaje={mensaje}
        setMostrarPopUp={setMostrarPopUp}
        eliminar={eliminar}
        id={id}
      ></BotonEliminar>
    </>
  );
};
