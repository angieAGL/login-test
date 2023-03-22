import { DatosUsuario } from "../../../dominio/entidades/DatosUsuario";

export type NavBarInterface = {
  datos?: DatosUsuario;
  modoLogin: boolean;
  mostrarSidebar?: boolean;
  setMostrarSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};
