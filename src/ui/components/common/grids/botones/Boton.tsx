import "../../../../css/boton.css";
import { BotonInterface } from "../Interfaces/BotonesInterface";
import Button from "react-bootstrap/Button";

const Boton = ({
  text,
  type,
  class_name,
  onChange,
  onClick,
  form,
}: BotonInterface) => {
  return (
    <Button
      type={type}
      id="boton"
      variant={`btn ${class_name}`}
      onChange={onChange}
      onClick={onClick}
      form={form}
    >
      {text}
    </Button>
  );
};
export default Boton;
