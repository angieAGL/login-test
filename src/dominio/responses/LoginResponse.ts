import { DatosUsuario } from "../entidades/DatosUsuario";

export type LoginResponse = {
  exito: boolean;
  mensaje: string;
  datos?: DatosUsuario;
};
