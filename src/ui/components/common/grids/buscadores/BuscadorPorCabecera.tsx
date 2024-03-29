import "../../../../css/buscador.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { TableInterface } from "../../../Interfaces/TablaInterface";

const BuscadorPorCabecera = ({ column }: TableInterface<{}>) => {
  const { filterValue, setFilter, Header } = column;

  return (
    <Col className="col-auto">
      <Form.Control
        className="form-control form-control-sm mt-3 buscar-texto"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder={Header}
      />
    </Col>
  );
};

export default BuscadorPorCabecera;
