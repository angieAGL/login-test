import React from "react";
import { Form } from "react-bootstrap";
import { Usuario } from "../../../../dominio/entidades/Usuario";
import FormularioUsuarioHook from "./FormularioUsuarioHook";

const FormularioUsuario = (
  modoEditar: boolean,
  idForm: string,
  onsubmit: (user: Usuario) => Promise<void>,
  initialDemo: Usuario
) => {
  const {
    reset,
    handleSubmit,
    idValidar,
    usuarioValidar,
    contraseniaValidar,
    mensajeErrorId,
    mensajeErrorUsuario,
    mensajeErrorContrasenia,
  } = FormularioUsuarioHook(initialDemo);

  const funcionSubmit = (data: Usuario) => {
    onsubmit(data);
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(funcionSubmit)} id={idForm}>
        <Form.Group className="mb-2">
          <Form.Label className="form-label ">ID</Form.Label>
          <Form.Control
            disabled={modoEditar}
            className={
              mensajeErrorId ? "form-control error" : "form-control correcto"
            }
            type="number"
            {...idValidar}
          ></Form.Control>
          {<p style={{ color: "var(--color-error)" }}>{mensajeErrorId}</p>}
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="form-label">Usuario</Form.Label>
          <Form.Control
            className={
              mensajeErrorUsuario
                ? "form-control error"
                : "form-control correcto"
            }
            type="text"
            {...usuarioValidar}
          ></Form.Control>
          {<p style={{ color: "var(--color-error)" }}>{mensajeErrorUsuario}</p>}
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="form-label">Contraseñia</Form.Label>
          <Form.Control
            className={
              mensajeErrorContrasenia
                ? "form-control error"
                : "form-control correcto"
            }
            type="text"
            {...contraseniaValidar}
          ></Form.Control>
          {
            <p style={{ color: "var(--color-error)" }}>
              {mensajeErrorContrasenia}
            </p>
          }
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioUsuario;
