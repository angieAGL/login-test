import React from "react";
import { useMemo } from "react";
import { ACTIVO, INACTIVO } from "../../../../../cross-cutting/constant";
import "../../../../css/buscador.css";

const BuscadorPorSeleccion = ({ column }:any) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;

  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row:any) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // UI for Multi-Select box
  return (
    <select
      className="form-select form-select-sm mt-3 buscarSeleccion"
      value={filterValue || "All"}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      <option value="">All</option>
      {options.map((option:any, i:number) => (
        <option key={i} value={option}>
          {typeof option == "boolean" ? (option ? ACTIVO : INACTIVO) : option}
        </option>
        
      ))};
    </select>
  );
};

export default BuscadorPorSeleccion;
