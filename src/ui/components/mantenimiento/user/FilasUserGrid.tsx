import { useMemo } from "react";
import { User } from "../../../../dominio/entidades/User";

const FilasGrid = (listaUsers: User[]) => {
  return useMemo(() => listaUsers, [listaUsers]);
};

export default FilasGrid;
