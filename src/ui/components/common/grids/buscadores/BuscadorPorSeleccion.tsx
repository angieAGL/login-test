import "../../../../css/buscador.css";
import { Form } from "react-bootstrap";

const BuscadorPorSeleccion = ({ column }: any) => {
  const { filterValue, setFilter, lista } = column;
  const options: any = [];

  lista.forEach((value: string, key: number) => {
    options.push(
      <option key={key} value={key}>
        {value}
      </option>
    );
  });

  const buscar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };
  const valorDefault = "Todo";

  return (
    <Form.Select
      className={"form-select-sm mt-3 buscar-seleccion"}
      value={filterValue || valorDefault}
      onChange={buscar}
    >
      <option value="">{valorDefault}</option>
      {options};
    </Form.Select>
  );
};

export default BuscadorPorSeleccion;
