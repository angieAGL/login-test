import { INGRESE_USUARIO, INGRESE_CONTRASEÑA } from "../cross-cutting/constant";

const validacion = (values) => {
  let errors = {};
  if (!values.usuario) {
    errors.usuario = INGRESE_USUARIO;
  }

  if (!values.contraseña) {
    errors.contraseña = INGRESE_CONTRASEÑA;
    errors.color="red"
  }
  return errors;
};

export default validacion;
