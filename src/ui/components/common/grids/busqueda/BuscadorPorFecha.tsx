import React from "react";
const BuscadorPorFecha = ({ column }:any) => {
  const { filterValue, setFilter } = column;

  const filtrar = (e:React.ChangeEvent<HTMLInputElement>) => {
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
