
const BuscadorPorFecha = ({ column }:any) => {
  const { filterValue, setFilter } = column;
  return (
    <div className="col-auto">
      <input
        className="form-control form-control-sm mt-3"
        type="date"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default BuscadorPorFecha;
