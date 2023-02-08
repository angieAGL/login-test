import React from "react";
import { ACTIVO, INACTIVO } from "../../../../../cross-cutting/constant";

import "../../../../css/buscador.css";

const BuscadorPorSeleccion = ({ column }: any) => {
  const { filterValue, setFilter, lista } = column;
  const options: any = [];

  lista.forEach((value: any, key: number) => {
    options.push(
      <option key={key} value={value}>
        {typeof value == "boolean" ? (value ? ACTIVO : INACTIVO) : value}
      </option>
    );
  }); // UI for Multi-Select box
  return (
    <select
      className="form-select form-select-sm mt-3 buscarSeleccion"
      value={filterValue || "All"}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      <option value="">All</option>
      {options};
    </select>
  );
};

export default BuscadorPorSeleccion;
