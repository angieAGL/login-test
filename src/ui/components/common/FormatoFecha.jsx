import dayjs from "dayjs";
import { FORMATO_FECHA } from "../../../cross-cutting/constant";
const FormatoFecha = (fecha) => {
  var nuevaFecha = dayjs(fecha);

  return nuevaFecha.format(FORMATO_FECHA);
};

export default FormatoFecha;
