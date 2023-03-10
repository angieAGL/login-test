import React from "react";
import { useState } from "react";
import { Usuario } from "../../../../dominio/entidades/Usuario";
import { UsuarioEvents } from "../../../../presentacion/UsuarioEvents";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import PopUpFormulario from "../../common/modal/PopUpFormulario";
import FormularioUsuario from "./FormularioUsuario";

export const BotonEditarUsuario = (
  data: Usuario[],
  setData: React.Dispatch<React.SetStateAction<Usuario[]>>,
  funcionEvento: UsuarioEvents,
  id: number,
  initialData: Record<string, any>
) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const idFormulario = "FormUsuario";

  const onsubmit = async (nuevoUsuario: Usuario) => {
    funcionEvento.onClickAgregar(nuevoUsuario).then((resp) => {
      if (resp) {
        const datacopy = [...data];
        datacopy.splice(id, 1, nuevoUsuario);
        setData(datacopy);
      }
      setMostrarPopUp(!resp);
    });
  };

  return (
    <>
      <BotonEditar
        href="#"
        onClick={() => {
          setMostrarPopUp(true);
        }}
      ></BotonEditar>
      {PopUpFormulario(
        mostrarPopUp,
        setMostrarPopUp,
        FormularioUsuario(true, idFormulario, onsubmit, initialData as Usuario),
        idFormulario,
        "Editar Usuario"
      )}
    </>
  );
};
