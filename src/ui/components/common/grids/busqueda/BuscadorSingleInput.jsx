import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "../../../../css/buscador.css";
import BotonBuscador from "../botones/BotonBuscador";

const BuscadorSingleInput = (tabla) => {
  const {
    setGlobalFilter,
    state: { globalFilter },
  } = tabla;
  const [value, setValue] = useState(globalFilter);

  const onFilterChange = useAsyncDebounce((value) =>{
    setGlobalFilter(value || undefined);
  },200);

  const buscar = () => {
    onFilterChange(value);
  };
  const reset = () => {
    onFilterChange("");
    setValue("");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="d-grid mb-3 ">
      <div className="row gap-2  text-center">
        <div className="col">
          <input
            className="form-control buscar_id"
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

        {/*<input
        className="buscar_nombre"
        size={40}
        value={value || ""}
        onChange={handleInputChange}
        placeholder="Nombre"
      />
      <input
        className="buscar_estado"
        size={40}
        value={value || ""}
        onChange={handleInputChange}
        placeholder="Estado"
  />*/}

      </div>

  );
};

export default BuscadorSingleInput;
