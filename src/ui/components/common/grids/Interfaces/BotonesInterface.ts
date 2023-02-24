export type BotonInterface = {
  text: any;
  type?: "button" | "submit" | "reset" | undefined;
  class_name?: string;
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: any;
};

export type BotonAccion = {
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};
