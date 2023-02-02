import React from "react";
import {  TableInstance } from "react-table";
import "../../../css/cabecera.css";


const Cabecera = (tabla: TableInstance, buscarCabecera:boolean) => {
//const Cabecera = (headerGroups:Array<HeaderGroup< Data>>, buscarCabecera:boolean) => {
  const {headerGroups} = tabla

  return (
    <thead className="cabecera cabecera_texto">
      {
        // Recorremos las columnas que previamente definimos
        headerGroups.map((headerGroup) => (
          // Añadimos las propiedades al conjunto de columnas
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              // Recorremos cada columna del conjunto para acceder a su información
              headerGroup.headers.map((column:any) => (
                // Añadimos las propiedades a cada celda de la cabecera
                <th {...column.getHeaderProps()}>
                  {
                    // Pintamos el título de nuestra columna (propiedad "Header")
                    column.render("Header")
                  }
                  {buscarCabecera ? (
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  ) : null}
                </th>
              ))
            }
          </tr>
        ))
      }
    </thead>
  );
};

export default Cabecera;
