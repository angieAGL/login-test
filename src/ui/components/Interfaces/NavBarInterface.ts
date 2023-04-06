import { DatosUsuario } from "../../../dominio/entidades/DatosUsuario";

export type NavBarInterface = {
  datos?: DatosUsuario;
  mostrarSidebar?: boolean;
  setMostrarSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};
