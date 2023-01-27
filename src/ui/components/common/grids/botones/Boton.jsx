import React from "react";
import "../../../../css/boton.css";
export const Boton = ({
  text,
  class_name,
  onClick,
  style,
  disabled,
  onChange,
}) => {
  const className = `btn ${class_name}`;

  return (
    <button
      style={style}
      type="submit"
      onClick={onClick}
      id="boton"
      className={className}
      disabled={disabled}
      onChange={onChange}
    >
      {text}
    </button>
  );
};
