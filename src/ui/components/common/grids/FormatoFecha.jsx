import dayjs from "dayjs";

const FormatoFecha = (fecha) => {
  var nuevaFecha = fecha.split("/").join("-");

  return nuevaFecha;
};

export default FormatoFecha;
