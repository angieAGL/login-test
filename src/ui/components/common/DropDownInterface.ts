import { UseFormRegisterReturn } from "react-hook-form";

export type DropDownInterface = {
  value: any;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: JSX.Element;
  class_name: string;
  valorDefault?: string;
  modo: "Editar" | "Buscar";
  ref?: UseFormRegisterReturn<string>;
};
