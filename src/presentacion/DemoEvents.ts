import { IDemoRepository } from "../aplicacion/interfaces/IDemoRepository";
import { ITipoRepository } from "../aplicacion/interfaces/ITipoRepository";
import { MostrarTablaDemoUseCase } from "../aplicacion/use-cases/MotrarTablaDemoUseCase";
import { DeleteDemoUseCase } from "../aplicacion/use-cases/DeleteDemoUseCase";
export class DemoEvents {
  private _demoRepository: IDemoRepository;
  private _tipoRepository: ITipoRepository;

  constructor(
    demoRepository: IDemoRepository,
    tipoRepository: ITipoRepository
  ) {
    this._demoRepository = demoRepository;
    this._tipoRepository = tipoRepository;
  }

  onLoad() {
    const mostrarTabla = new MostrarTablaDemoUseCase(
      this._demoRepository,
      this._tipoRepository
    );

    return mostrarTabla.mostrarTablaDemo();
  }
  delete(id: number) {
    const eliminarDemo = new DeleteDemoUseCase(this._demoRepository);

    return eliminarDemo.deleteDemo(id);
  }
}
