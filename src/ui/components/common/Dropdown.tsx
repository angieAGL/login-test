import "../../css/buscador.css";
import Form from "react-bootstrap/Form";
import { DropDownInterface } from "./DropDownInterface";
const DropDown = ({
  value,
  onChange,
  options,
  class_name,
  valorDefault = "Todo",
  modo,
  ref,
}: DropDownInterface) => {
  const className = `form-select ${class_name}`;
  return (
    <Form.Select
      className={className}
      value={value || valorDefault}
      onChange={onChange}
      name="id_genero"
      {...ref}
    >
      <option value={modo === "Editar" ? 0 : ""}>{valorDefault}</option>
      {options};
    </Form.Select>
  );
};

export default DropDown;
