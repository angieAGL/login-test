import React from "react";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import { useState } from "react";
import { Demo } from "../../../../dominio/entidades/Demo";
import { DemoEvents } from "../../../../presentacion/DemoEvents";

export const BotonEliminarDemo = (
  id: number,
  data: Demo[],
  setData: React.Dispatch<React.SetStateAction<Demo[]>>,
  funcionEimina: DemoEvents
) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const mensaje = "¿Esta seguro que quiere eliminar ?";
  const eliminar = async (id: number) => {
    const datacopy = [...data];
    datacopy[id].activo = false;
    setData(datacopy);
    return funcionEimina.onClickDelete(id).then((res) => res);
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
        funcion={eliminar}
        id={id}
      ></BotonEliminar>
    </>
  );
};
