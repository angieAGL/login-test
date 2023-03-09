import {
  MENSAJE_INGRESE_USUARIO,
  MENSAJE_INGRESE_CONTRASEÑA,
  MENSAJE_INGRESE_ID,
  MENSAJE_FORMATO_INPUT_STRING,
  MENSAJE_FORMATO_INPUT_NUMBER,
  MENSAJE_VALOR_MINIMO_ID,
  VALOR_MINIMO_ID,
  MENSAJE_LONGITUD_MINIMO_USUARIO,
  LONGITUD_MINIMO_USUARIO,
} from "../../../../cross-cutting/Constants";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { Usuario } from "../../../../dominio/entidades/Usuario";

const FormularioUsuarioHook = (initialData: Usuario) => {
  const patterns = {
    string: /^[A-Za-z]+$/i,
    id: /[0-9]/,
  };

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const idValidar: UseFormRegisterReturn<string> = register("id", {
    required: MENSAJE_INGRESE_ID,
    min: {
      value: VALOR_MINIMO_ID,
      message: `${MENSAJE_VALOR_MINIMO_ID} ${VALOR_MINIMO_ID}`,
    },
    pattern: {
      value: patterns.id,
      message: MENSAJE_FORMATO_INPUT_NUMBER,
    },
  });

  const usuarioValidar: UseFormRegisterReturn<string> = register("usuario", {
    required: MENSAJE_INGRESE_USUARIO,
    minLength: {
      value: LONGITUD_MINIMO_USUARIO,
      message: `${MENSAJE_LONGITUD_MINIMO_USUARIO} ${LONGITUD_MINIMO_USUARIO}`,
    },
    pattern: {
      value: patterns.string,
      message: MENSAJE_FORMATO_INPUT_STRING,
    },
  });

  const contraseniaValidar: UseFormRegisterReturn<string> = register(
    "contrasenia",
    {
      required: MENSAJE_INGRESE_CONTRASEÑA,
    }
  );

  const mensajeErrorId = errors?.id?.message;
  const mensajeErrorUsuario = errors?.usuario?.message;
  const mensajeErrorContrasenia = errors?.contrasenia?.message;

  return {
    errors,
    setValue,
    reset,
    handleSubmit,
    idValidar,
    usuarioValidar,
    contraseniaValidar,
    mensajeErrorId,
    mensajeErrorUsuario,
    mensajeErrorContrasenia,
  };
};

export default FormularioUsuarioHook;
