import { useMemo } from "react";
import { User } from "../../../../dominio/entidades/User";

const FilasGrid = (listaUsers: User[]) => {
  const rows = useMemo(() => listaUsers, [listaUsers]);
  return rows;
};

export default FilasGrid;
