import React from "react";
import { useState } from "react";
import { Usuario } from "../../../../dominio/entidades/Usuario";
import { UsuarioEvents } from "../../../../presentacion/UsuarioEvents";
import { BotonAgregar } from "../../common/grids/botones/BotonAgregar";
import PopUpFormulario from "../../common/modal/PopUpFormulario";
import FormularioUsuario from "./FormularioUsuario";

export const BotonAgregarUsuario = (
  data: Usuario[],
  setData: React.Dispatch<React.SetStateAction<Usuario[]>>,
  funcionEvento: UsuarioEvents
) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const idFormulario = "FormUsuario";
  const initialData = {
    id: 0,
    usuario: "",
    contrasenia: "",
  };

  const onsubmit = async (nuevoUsuario: Usuario) => {
    funcionEvento.onClickAgregar(nuevoUsuario).then((resp) => {
      if (resp) {
        const datacopy = [...data];
        datacopy.push(nuevoUsuario);
        setData(datacopy);
      }
      setMostrarPopUp(!resp);
    });
  };

  return (
    <>
      <BotonAgregar
        href="#"
        onClick={() => {
          setMostrarPopUp(true);
        }}
      ></BotonAgregar>
      {PopUpFormulario(
        mostrarPopUp,
        setMostrarPopUp,
        FormularioUsuario(false, idFormulario, onsubmit, initialData),
        idFormulario,
        "Agregar Usuario"
      )}
    </>
  );
};
