import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "../../../../css/buscador.css";
import BotonBuscador from "../botones/BotonBuscador";

const BuscadorSingleInput = (tabla: any) => {
  const {
    setGlobalFilter,
    state: { globalFilter },
  } = tabla;
  const [value, setValue] = useState(globalFilter);

  const onFilterChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  const buscar = () => {
    onFilterChange(value);
  };
  const reset = () => {
    onFilterChange("");
    setValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      {process.env.REACT_APP_BUSCAR_SINGLE === "true" ? (
        <div className="d-grid">
          <div className="row gap-2  text-center">
            <div className="col">
              <input
                className="form-control buscar_texto"
                value={value || ""}
                onChange={handleInputChange}
                placeholder="Ingrese el dato para buscar"
              />
            </div>

            <div className="col-md-auto  ">
              <BotonBuscador text={"Buscar"} onClick={buscar}></BotonBuscador>
              <BotonBuscador text={"Limpiar"} onClick={reset}></BotonBuscador>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BuscadorSingleInput;
