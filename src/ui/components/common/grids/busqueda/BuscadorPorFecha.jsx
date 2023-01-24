import React from "react";
import dayjs from "dayjs";
const BuscadorPorFecha = ({ column }) => {
  const { filterValue, setFilter } = column;

  const filtrar = (e) => {
    var fecha = dayjs(e.target.value);
    setFilter(fecha.format("DD-MM-YYYY"));
  };

  return (
    <div className="col-auto">
      <input
        className="form-control form-control-sm mt-3"
        type="date"
        onChange={filtrar}
      />
    </div>
  );
};

export default BuscadorPorFecha;
