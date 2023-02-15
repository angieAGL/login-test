import {
  MENSAJE_INGRESE_USUARIO,
  MENSAJE_INGRESE_CONTRASEÑA,
  MENSAJE_FORMATO_USUARIO,
  MENSAJE_LONGITUD_MINIMO_USUARIO,
  LONGITUD_MINIMO_USUARIO,
} from "../../../cross-cutting/constants";
import { useForm } from "react-hook-form";
import LoginEvents from "../../../presentacion/LoginEvents";

const LoginValidation = () => {
  const initialData = { usuario: "", contraseña: "" };

  const patterns = { name: /^[A-Za-z]+$/i };

  const { onSubmit } = LoginEvents();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const usuarioValidar = register("usuario", {
    required: MENSAJE_INGRESE_USUARIO,
    minLength: {
      value: LONGITUD_MINIMO_USUARIO,
      message: `${MENSAJE_LONGITUD_MINIMO_USUARIO} ${LONGITUD_MINIMO_USUARIO}`,
    },
    pattern: {
      value: patterns.name,
      message: MENSAJE_FORMATO_USUARIO,
    },
  });

  const contraseñaValidar = register("contraseña", {
    required: MENSAJE_INGRESE_CONTRASEÑA,
  });

  const mensajeErrorUsuario = errors?.usuario?.message;
  const mensajeErrorContraseña = errors?.contraseña?.message;

  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
    usuarioValidar,
    contraseñaValidar,
    mensajeErrorUsuario,
    mensajeErrorContraseña,
  };
};

export default LoginValidation;
