import "../../css/buscador.css";
import Form from "react-bootstrap/Form";

const DropDown = ({ value, onChange, options, class_name }: any) => {
  const valorDefault = "Todo";
  const className = `form-select ${class_name}`;
  return (
    <Form.Select
      className={className}
      value={value || valorDefault}
      onChange={onChange}
    >
      <option value="">{valorDefault}</option>
      {options};
    </Form.Select>
  );
};

export default DropDown;
