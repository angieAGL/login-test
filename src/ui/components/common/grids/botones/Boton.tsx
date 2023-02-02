import React from "react";
import "../../../../css/boton.css";

type IBoton={
  text: any,
  class_name: string,
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>)=>void,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>Event
  disabled?: any,

}

const Boton = (
{ text, class_name, onChange, onClick}: IBoton
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
export default Boton;
