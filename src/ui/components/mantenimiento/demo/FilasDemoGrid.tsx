import { useMemo } from "react";
import { Demo } from "../../../../dominio/entidades/Demo";

const FilasGrid = (listaDemo: Demo[]) => {
  const rows = useMemo(() => listaDemo, [listaDemo]);
  return rows;
};

export default FilasGrid;
