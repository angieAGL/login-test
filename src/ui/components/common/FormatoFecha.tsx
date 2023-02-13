import dayjs from "dayjs";
import { FORMATO_FECHA } from "../../../cross-cutting/Constants";
const FormatoFecha = (fecha: string) => {
  var nuevaFecha = dayjs(fecha);

  return <div>{nuevaFecha.format(FORMATO_FECHA)}</div>;
};

export default FormatoFecha;
