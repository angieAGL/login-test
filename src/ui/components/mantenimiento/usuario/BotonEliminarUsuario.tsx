import React from "react";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import { useState } from "react";
import { UsuarioEvents } from "../../../../presentacion/UsuarioEvents";
import { Usuario } from "../../../../dominio/entidades/Usuario";

export const BotonEliminarUsuario = (
  id: number,
  data: Usuario[],
  setData: React.Dispatch<React.SetStateAction<Usuario[]>>,
  funcionEimina: UsuarioEvents
) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const mensaje = "¿Esta seguro que quiere eliminar ?";
  const eliminar = async (id: number) => {
    const datacopy = [...data];
    datacopy.splice(id, 1);
    setData(datacopy);
    return funcionEimina.onClickEliminar(id).then((res) => res);
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
