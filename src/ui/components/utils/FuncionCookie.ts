import Cookies from "js-cookie";
import { DatosUsuario } from "../../../dominio/entidades/DatosUsuario";

export const setCookie = (nombre: string, data: DatosUsuario) => {
  const expirationDate = new Date(
    Date.now() +
      Number(process.env.REACT_APP_EXPIRACION_LOGIN_COOKIE) * 60 * 1000
  );
  Cookies.set(nombre, JSON.stringify(data), {
    expires: expirationDate,
    sameSite: "lax",
  });
};

export const getCookie = (nombre: string) => {
  return Cookies.get(nombre);
};

export const deleteCookie = (nombre: string) => {
  return Cookies.remove(nombre, { sameSite: "lax" });
};
