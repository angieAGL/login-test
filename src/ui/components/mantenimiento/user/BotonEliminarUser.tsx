import React from "react";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import { useState } from "react";
import { UserEvents } from "../../../../presentacion/UserEvents";
import { User } from "../../../../dominio/entidades/User";

export const BotonEliminarUser = (
  id: number,
  data: User[],
  setData: React.Dispatch<React.SetStateAction<User[]>>,
  funcionEimina: UserEvents
) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const mensaje = "¿Esta seguro que quiere eliminar ?";
  const eliminar = async (id: number) => {
    const datacopy = [...data];
    datacopy.splice(id, 1);
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
