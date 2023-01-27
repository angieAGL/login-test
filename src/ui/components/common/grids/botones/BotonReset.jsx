import React from "react";
import BotonBuscador from "./BotonBuscador";

const BotonReset = (tabla) => {
  const { setAllFilters } = tabla;
  return (
    <BotonBuscador
      text={"Reset"}
      class_name={"mt-3 mx-auto form-control"}
      onClick={() => setAllFilters([])}
    />
  );
};

export default BotonReset;
