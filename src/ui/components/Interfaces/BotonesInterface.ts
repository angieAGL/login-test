export type BotonInterface = {
  text: string | JSX.Element | number;
  type?: "button" | "submit" | "reset" | undefined;
  class_name?: string;
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  href?: string;
  form?: string;
};

export type BotonCrear = {
  to: string;
  state?: any;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
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
  to: string;
  state?: any; // Es any porque el Link, su state es any
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export type BotonLogOut = {
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  mostrarPopUp: boolean;
  mensaje: string;
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};
