import React from "react";
import "../../../../css/buscador.css";

const BuscadorPorSeleccion = ({ column }: any) => {
  const { filterValue, setFilter, lista } = column;
  const options: any = [];

  lista.forEach((value: string, key: any) => {
    options.push(
      <option key={key} value={key}>
        {value}
      </option>
    );
  }); // UI for Multi-Select box
  return (
    <select
      className="form-select form-select-sm mt-3 buscarSeleccion"
      value={filterValue || "Todo"}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      <option value="">Todo</option>
      {options};
    </select>
  );
};

export default BuscadorPorSeleccion;
