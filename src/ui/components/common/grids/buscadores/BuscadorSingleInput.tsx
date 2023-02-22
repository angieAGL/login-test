import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "../../../../css/buscador.css";
import BotonBuscador from "../botones/BotonBuscador";
import { Col, Row, Form } from "react-bootstrap";

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
  };

  return (
    <>
      {process.env.REACT_APP_BUSCAR_SINGLE === "true" ? (
        <div className="d-grid">
          <Row className="gap-2 text-center">
            <Col>
              <Form.Control
                className="form-control buscar-texto"
                value={value || ""}
                onChange={handleInputChange}
                placeholder="Ingrese el dato para buscar"
              />
            </Col>
            <Col md="auto">
              <BotonBuscador text={"Buscar"} onClick={buscar}></BotonBuscador>
              <BotonBuscador text={"Limpiar"} onClick={reset}></BotonBuscador>
            </Col>
          </Row>
        </div>
      ) : null}
    </>
  );
};

export default BuscadorSingleInput;
