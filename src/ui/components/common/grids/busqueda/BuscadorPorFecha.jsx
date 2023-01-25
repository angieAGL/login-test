import React from "react";
import dayjs from "dayjs";
const BuscadorPorFecha = ({ column }) => {
  const { filterValue, setFilter } = column;

  const filtrar = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="col-auto">
      <input
        className="form-control form-control-sm mt-3"
        type="date"
        value={filterValue || ""}
        onChange={filtrar}
      />
    </div>
  );
};

export default BuscadorPorFecha;
