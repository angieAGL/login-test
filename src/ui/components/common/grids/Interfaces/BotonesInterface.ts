export type BotonInterface = {
  text: any;
  type?: "button" | "submit" | "reset" | undefined;
  class_name?: string;
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: any;
};

export type BotonBorrar = {
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  mostrarPopUp: boolean;
  mensaje: string;
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  funcion: (id: number) => Promise<boolean>;
  id: number;
};

export type BotonAccion = {
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};
