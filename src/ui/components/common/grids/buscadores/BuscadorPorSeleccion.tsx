import DropDown from "../../DropDown";
import "../../../../css/buscador.css";

const BuscadorPorSeleccion = ({ column }: any) => {
  const { filterValue, setFilter, lista } = column;
  const options: any = [];

  lista.forEach((value: string, key: any) => {
    options.push(
      <option key={key} value={key}>
        {value}
      </option>
    );
  });

  const buscar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <DropDown
      class_name={"form-select-sm mt-3 buscar-seleccion"}
      value={filterValue}
      options={options}
      onChange={buscar}
    />
  );
};

export default BuscadorPorSeleccion;
