import React from "react";
import "../../../../css/buscador.css";

const BuscadorPorCabecera = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <input
      className="form-control form-control-sm mt-3 buscar_texto"
      value={filterValue || ""}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default BuscadorPorCabecera;
