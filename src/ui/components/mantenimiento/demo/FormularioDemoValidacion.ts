import {
  MENSAJE_INGRESE_NOMBRE,
  MENSAJE_INGRESE_APELLIDO,
  MENSAJE_INGRESE_ID,
  MENSAJE_INGRESE_EMAIL,
  MENSAJE_INGRESE_FECHA,
  MENSAJE_FORMATO_INPUT_STRING,
  MENSAJE_FORMATO_INPUT_NUMBER,
  MENSAJE_VALOR_MINIMO_ID,
  MENSAJE_VALOR_MINIMO_NUMERO,
  VALOR_MINIMO_ID,
  VALOR_MINIMO_NUMERO,
  MENSAJE_SELECCION,
} from "../../../../cross-cutting/Constants";
import { useForm } from "react-hook-form";
import { Demo } from "../../../../dominio/entidades/Demo";

const FormularioDemoValidation = (initialData: Demo) => {
  const patterns = { string: /^[A-Za-z]+$/i, id: /[0-9]/ };

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const idValidar = register("id", {
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

  const nombreValidar = register("nombre", {
    required: MENSAJE_INGRESE_NOMBRE,
    pattern: {
      value: patterns.string,
      message: MENSAJE_FORMATO_INPUT_STRING,
    },
  });

  const apellidoValidar = register("apellido", {
    required: MENSAJE_INGRESE_APELLIDO,
    pattern: {
      value: patterns.string,
      message: MENSAJE_FORMATO_INPUT_STRING,
    },
  });

  const fechaValidar = register("fecha", { required: MENSAJE_INGRESE_FECHA });

  const emailValidar = register("email", { required: MENSAJE_INGRESE_EMAIL });

  const generoValidar = register("id_genero", {
    required: MENSAJE_SELECCION,
    min: { value: 1, message: MENSAJE_SELECCION },
  });

  const numeroValidar = register("numero", {
    required: true,
    min: {
      value: VALOR_MINIMO_NUMERO,
      message: `${MENSAJE_VALOR_MINIMO_NUMERO} ${VALOR_MINIMO_NUMERO}`,
    },
  });

  const mensajeErrorId = errors?.id?.message;
  const mensajeErrorNombre = errors?.nombre?.message;
  const mensajeErrorApellido = errors?.apellido?.message;
  const mensajeErrorEmail = errors?.email?.message;
  const mensajeErrorFecha = errors?.fecha?.message;
  const mensajeErrorGenero = errors?.id_genero?.message;
  const mensajeErrorNumero = errors?.numero?.message;

  return {
    errors,
    register,
    setValue,
    reset,
    handleSubmit,
    idValidar,
    nombreValidar,
    apellidoValidar,
    emailValidar,
    fechaValidar,
    numeroValidar,
    generoValidar,
    mensajeErrorId,
    mensajeErrorNombre,
    mensajeErrorApellido,
    mensajeErrorEmail,
    mensajeErrorFecha,
    mensajeErrorNumero,
    mensajeErrorGenero,
  };
};

export default FormularioDemoValidation;
