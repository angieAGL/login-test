import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DropDown from "../../common/DropDown";
import { Demo } from "../../../../dominio/entidades/Demo";

const AgregarDemo = ({ lista }: any) => {
  const initialUser = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    id_genero: 0,
    genero: "",
    numero: 0,
    fecha: "",
    activo: true,
  };

  const [user, setUser] = useState<Demo>(initialUser);

  const options: any = [];

  lista.forEach((value: string, key: any) => {
    options.push(
      <option key={key} value={key}>
        {value}
      </option>
    );
  });

  const seleccionrGenero = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      id_genero: Number(e.target.value),
      genero: lista.get(Number(e.target.value)),
    });
  };

  const handleChange =
    (name: any) =>
    ({ target: { value } }: any) => {
      setUser({ ...user, [name]: value });
    };

  console.log(user);

  return (
    <div>
      <p className="text-center titulo">Agregar demo</p>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label className="form-label ">ID</Form.Label>
          <Form.Control
            className="form-label"
            type="number"
            value={user.id}
            onChange={handleChange("id")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Nombre</Form.Label>
          <Form.Control
            className="form-label"
            type="text"
            value={user.nombre}
            onChange={handleChange("nombre")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Apellido</Form.Label>
          <Form.Control
            className="form-label"
            type="text"
            value={user.apellido}
            onChange={handleChange("apellido")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            className="form-label"
            type="email"
            value={user.email}
            onChange={handleChange("email")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Genero</Form.Label>
          <DropDown
            class_name={"form-select-sm buscar-seleccion"}
            value={user.id_genero}
            options={options}
            onChange={seleccionrGenero}
          ></DropDown>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Numero</Form.Label>
          <Form.Control
            className="form-label"
            type="number"
            value={user.numero}
            onChange={handleChange("numero")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Fecha</Form.Label>
          <Form.Control
            className="form-control form-control-sm"
            type="date"
            value={user.fecha || ""}
            onChange={handleChange("fecha")}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AgregarDemo;
