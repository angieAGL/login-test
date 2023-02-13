import Boton from "./Boton";
import { BotonInterface } from "../Interfaces/BotonesInterface";

const BotonBuscador = ({ text, onClick, class_name }: BotonInterface) => {
  const className = `me-2 buscar_texto_btn ${class_name}`;

  return <Boton text={text} class_name={className} onClick={onClick}></Boton>;
};

export default BotonBuscador;
