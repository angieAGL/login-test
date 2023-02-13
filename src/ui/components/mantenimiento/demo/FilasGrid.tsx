/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { Demo } from "../../../../dominio/entidades/Demo";

const FilasGrid = (listaDemo: Demo[]) => {
  const rows = useMemo(() => listaDemo, []);
  return rows;
};

export default FilasGrid;
