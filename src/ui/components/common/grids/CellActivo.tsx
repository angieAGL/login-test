import "../../../css/cellActivo.css";

const CellActivo = ( valor :boolean) => {
  return valor ? (
    <div className="activo">Sí</div>
  ) : (
    <div className="inactivo">No</div>
  );
};

export default CellActivo;
