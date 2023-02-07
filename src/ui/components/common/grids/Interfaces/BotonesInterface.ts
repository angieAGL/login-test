export type BotonInterface = {
  text: any;
  class_name?: string;
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: any;
};

export type BotonAccion = {
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};
