import { Form } from "react-bootstrap";
import { Demo } from "../../../../dominio/entidades/Demo";
import FormularioDemoValidacion from "./FormularioDemoValidacion";

const FormularioDemo = (
  modoEditar: boolean,
  listaGenero: Map<number, string>,
  idForm: string,
  onsubmit: (user: Demo) => Promise<void>,
  initialDemo: Demo
) => {
  const {
    handleSubmit,
    reset,
    generoValidar,
    idValidar,
    nombreValidar,
    apellidoValidar,
    emailValidar,
    fechaValidar,
    numeroValidar,
    mensajeErrorId,
    mensajeErrorNombre,
    mensajeErrorApellido,
    mensajeErrorEmail,
    mensajeErrorFecha,
    mensajeErrorGenero,
    mensajeErrorNumero,
  } = FormularioDemoValidacion(initialDemo);

  const options: any = [];

  listaGenero.forEach((value: string, key: any) => {
    options.push(
      <option key={key} value={key}>
        {value}
      </option>
    );
  });

  const funcionSubmit = (data: Demo) => {
    data.genero = listaGenero.get(Number(data.id_genero)) as string;
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
          <Form.Label className="form-label">Nombre</Form.Label>
          <Form.Control
            className={
              mensajeErrorNombre
                ? "form-control error"
                : "form-control correcto"
            }
            type="text"
            {...nombreValidar}
          ></Form.Control>
          {<p style={{ color: "var(--color-error)" }}>{mensajeErrorNombre}</p>}
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="form-label">Apellido</Form.Label>
          <Form.Control
            className={
              mensajeErrorApellido
                ? "form-control error"
                : "form-control correcto"
            }
            type="text"
            {...apellidoValidar}
          ></Form.Control>
          {
            <p style={{ color: "var(--color-error)" }}>
              {mensajeErrorApellido}
            </p>
          }
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            className={
              mensajeErrorEmail ? "form-control error" : "form-control correcto"
            }
            type="email"
            {...emailValidar}
          ></Form.Control>
          {<p style={{ color: "var(--color-error)" }}>{mensajeErrorEmail}</p>}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Genero</Form.Label>
          <Form.Select
            className={
              mensajeErrorGenero
                ? "form-select-sm buscar-seleccion error"
                : "form-select-sm buscar-seleccion correcto"
            }
            {...generoValidar}
          >
            <option value={0}>"Seleccione"</option>
            {options};
          </Form.Select>
          {<p style={{ color: "var(--color-error)" }}>{mensajeErrorGenero}</p>}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Numero</Form.Label>
          <Form.Control
            className={
              mensajeErrorNumero
                ? "form-control error"
                : "form-control correcto"
            }
            type="number"
            {...numeroValidar}
          ></Form.Control>
          {<p style={{ color: "var(--color-error)" }}>{mensajeErrorNumero}</p>}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-label">Fecha</Form.Label>
          <Form.Control
            className={
              mensajeErrorEmail
                ? "form-control-sm error"
                : "form-control-s, correcto"
            }
            type="date"
            {...fechaValidar}
          ></Form.Control>
          {<p style={{ color: "var(--color-error)" }}>{mensajeErrorFecha}</p>}
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioDemo;
