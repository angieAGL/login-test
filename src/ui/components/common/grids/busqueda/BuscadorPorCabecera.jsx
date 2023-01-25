import React from "react";

const BuscadorPorCabecera = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div className="col-auto">
      <input
        className="form-control form-control-sm mt-3"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default BuscadorPorCabecera;
