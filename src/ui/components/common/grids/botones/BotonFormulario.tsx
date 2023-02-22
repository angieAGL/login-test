import { BotonInterface } from "../Interfaces/BotonesInterface";
import Boton from "./Boton";

const BotonFormulario = ({ text }: BotonInterface) => {
  return <Boton type="submit" text={text}></Boton>;
};

export default BotonFormulario;
