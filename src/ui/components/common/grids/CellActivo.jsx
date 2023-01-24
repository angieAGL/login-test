import React from "react";
import "../../../css/cellActivo.css";

const CellActivo = ({ valor }) => {
  return valor ? (
    <div className="activo">Sí</div>
  ) : (
    <div className="inactivo">No</div>
  );
};

export default CellActivo;
