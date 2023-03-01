import { useMemo } from "react";
import { Usuario } from "../../../../dominio/entidades/Usuario";

const FilasUsuarioGrid = (listaUsuarios: Usuario[]) => {
  return useMemo(() => listaUsuarios, [listaUsuarios]);
};

export default FilasUsuarioGrid;
