import React from "react";
import { Form } from "react-bootstrap";
import DropDown from "../../common/DropDown";
import { useForm } from "react-hook-form";

const FormularioDemo = (
  listaGenero: Map<number, string>,
  idForm: string,
  onSubmit: any
) => {
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

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initialUser,
  });

  const options: any = [];

  listaGenero.forEach((value: string, key: any) => {
    options.push(
      <option key={key} value={key}>
        {value}
      </option>
    );
  });

  const seleccionrGenero = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue("id_genero", Number(e.target.value));
    setValue("genero", listaGenero.get(Number(e.target.value)) as string);
  };

  return (
    <div>
      <p className="text-center titulo">Agregar demo</p>
      <Form onSubmit={handleSubmit(onSubmit)} id={idForm}>
        <Form.Group className="mb-2">
          <Form.Label className="form-label ">ID</Form.Label>
          <Form.Control
            className="form-label"
            type="number"
            {...register("id")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Nombre</Form.Label>
          <Form.Control
            className="form-label"
            type="text"
            {...register("nombre")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Apellido</Form.Label>
          <Form.Control
            className="form-label"
            type="text"
            {...register("apellido")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            className="form-label"
            type="email"
            {...register("email")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Genero</Form.Label>
          <DropDown
            class_name={"form-select-sm buscar-seleccion"}
            options={options}
            onChange={seleccionrGenero}
          ></DropDown>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Numero</Form.Label>
          <Form.Control
            className="form-label"
            type="number"
            {...register("numero")}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Fecha</Form.Label>
          <Form.Control
            className="form-control form-control-sm"
            type="date"
            {...register("fecha")}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioDemo;
