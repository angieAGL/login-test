import { MostrarTablaDemoUseCase } from "../aplicacion/useCase/MotrarTablaDemoUseCase";
import { DemoRepository } from "../infractutura/repositorios/DemoRepository";
import { TipoRepository } from "../infractutura/repositorios/TipoRepository";

export const onLoad = () => {
  const tabla = new MostrarTablaDemoUseCase(
    new DemoRepository(),
    new TipoRepository()
  );

  return tabla.mostrarTablaDemo();
};
