import {
  MENSAJE_INGRESE_USUARIO,
  MENSAJE_INGRESE_CONTRASEÑA,
  MENSAJE_FORMATO_USUARIO,
  MENSAJE_LONGITUD_MINIMO_USUARIO,
  LONGITUD_MINIMO_USUARIO,
} from "../../../cross-cutting/Constants";
import { useForm } from "react-hook-form";
import LoginEvents from "../../../presentacion/LoginEvents";
import { IUserRepository } from "../../../aplicacion/interfaces/IUserRepository";

const LoginValidation = (userRepository: IUserRepository) => {
  const initialData = { usuario: "", contrasenia: "" };

  const patterns = { name: /^[A-Za-z]+$/i };

  const { onSubmit } = LoginEvents(userRepository);

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

  const contraseñaValidar = register("contrasenia", {
    required: MENSAJE_INGRESE_CONTRASEÑA,
  });

  const mensajeErrorUsuario = errors?.usuario?.message;
  const mensajeErrorContraseña = errors?.contrasenia?.message;

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
