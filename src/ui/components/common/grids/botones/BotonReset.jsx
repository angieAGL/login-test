import React from "react";
import { Boton } from "./Boton";

const BotonReset = (tabla) => {
  const { setAllFilters } = tabla;
  return (
    <Boton
      text={"Reset"}
      class_name={"mt-2"}
      onClick={() => setAllFilters([])}
    />
  );
};

export default BotonReset;
