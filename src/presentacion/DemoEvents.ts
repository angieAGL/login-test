import { IDemoRepository } from "../aplicacion/interfaces/IDemoRepository";
import { ITipoRepository } from "../aplicacion/interfaces/ITipoRepository";
import { MostrarTablaDemoUseCase } from "../aplicacion/useCase/MotrarTablaDemoUseCase";

export const onLoad = (
  demoRepository: IDemoRepository,
  tipoRepository: ITipoRepository
) => {
  const tabla = new MostrarTablaDemoUseCase(demoRepository, tipoRepository);

  return tabla.mostrarTablaDemo();
};
