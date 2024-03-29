import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { TableInterface } from "../../../Interfaces/TablaInterface";

const BuscadorPorFecha = ({ column }: TableInterface<{}>) => {
  const { filterValue, setFilter } = column;
  return (
    <Col className="col-auto">
      <Form.Control
        className="form-control form-control-sm mt-3"
        type="date"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </Col>
  );
};

export default BuscadorPorFecha;
