import { BotonInterface } from "../../../Interfaces/BotonesInterface";
import Boton from "./Boton";

const BotonFormulario = ({ text, class_name }: BotonInterface) => {
  return <Boton type="submit" class_name={class_name} text={text}></Boton>;
};

export default BotonFormulario;
