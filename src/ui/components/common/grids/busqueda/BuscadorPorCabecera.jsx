import React from "react";
import "../../../../css/buscador.css";

const BuscadorPorCabecera = ({ column }) => {
  const { filterValue, setFilter } = column;

  const filtar = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="col-auto">
      <input
        className="form-control form-control-sm mt-3 buscar"
        value={filterValue || ""}
        onChange={filtar}
      />
    </div>
  );
};

export default BuscadorPorCabecera;
