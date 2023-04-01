import Boton from "./Boton";
import { BotonInterface } from "../../../Interfaces/BotonesInterface";

const BotonBuscador = ({ text, onClick, class_name }: BotonInterface) => {
  return (
    <Boton
      type="button"
      text={text}
      class_name={`me-2 buscar-texto-btn ${class_name}`}
      onClick={onClick}
    ></Boton>
  );
};

export default BotonBuscador;
