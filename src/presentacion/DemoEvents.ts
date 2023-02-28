import { IDemoRepository } from "../aplicacion/interfaces/IDemoRepository";
import { ITipoRepository } from "../aplicacion/interfaces/ITipoRepository";
import { MostrarTablaDemoUseCase } from "../aplicacion/use-cases/MotrarTablaDemoUseCase";
import { EliminarDemoUseCase } from "../aplicacion/use-cases/EliminarDemoUseCase";

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
  onClickDelete(id: number) {
    const eliminarDemo = new EliminarDemoUseCase(this._demoRepository);

    return eliminarDemo.eliminaDemo(id);
  }
}
