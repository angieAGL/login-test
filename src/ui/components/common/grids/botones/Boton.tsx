import "../../../../css/boton.css";
import { BotonInterface } from "../Interfaces/BotonesInterface";

const Boton = ({ text, class_name, onChange, onClick }: BotonInterface) => {
  const className = `btn ${class_name}`;

  return (
    <button
      type="button"
      id="boton"
      className={className}
      onChange={onChange}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Boton;
