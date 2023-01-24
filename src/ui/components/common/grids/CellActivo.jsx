import React from "react";
import "../../../css/cellActivo.css";
import { ACTIVO, INACTIVO } from "../../../../cross-cutting/constant";

const CellActivo = ({ valor }) => {
  return valor ? (
    <div className="activo">{ACTIVO}</div>
  ) : (
    <div className="inactivo">{INACTIVO}</div>
  );
};

export default CellActivo;
