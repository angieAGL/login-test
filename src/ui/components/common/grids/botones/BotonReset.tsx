import BotonBuscador from "./BotonBuscador";

const BotonReset = (tabla: any) => {
  const { setAllFilters } = tabla;

  return (
    <BotonBuscador
      text={"Reset"}
      class_name={"mt-3 mx-auto w-100 form-control"}
      onClick={() => setAllFilters([])}
    />
  );
};

export default BotonReset;
