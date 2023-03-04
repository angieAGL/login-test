export type popUpBaseInterface = {
  show: boolean;
  titulo?: string;
  mensaje: string | JSX.Element;
  botones: Array<JSX.Element>;
};
