import React from "react";
import "../../../css/cabecera.css";

const Cabecera = (tabla:any, buscarCabecera:any) => {
  const { headerGroups } = tabla;
  //let tipoBuscador=true;

  return (
    <thead className="cabecera cabecera_texto">
      {
        // Recorremos las columnas que previamente definimos
        headerGroups.map((headerGroup:any) => (
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
