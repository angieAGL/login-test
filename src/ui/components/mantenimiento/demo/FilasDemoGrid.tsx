import { useMemo } from "react";
import { Demo } from "../../../../dominio/entidades/Demo";

const FilasGrid = (listaDemo: Demo[]) => {
  return useMemo(() => listaDemo, [listaDemo]);
};

export default FilasGrid;
