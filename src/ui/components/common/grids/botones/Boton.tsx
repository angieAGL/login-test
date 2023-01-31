import React from "react";
import "../../../../css/boton.css";

type Boton={
  text: any,
  class_name: string,
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>)=>void,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>Event
  disabled?: any,

}

export const Boton = (
{ text, class_name, onChange, onClick}: Boton
) => {
  const className = `btn ${class_name}`;

  return (
    <button
      type="submit"
      id="boton"
      className={className}
      onChange={onChange}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
