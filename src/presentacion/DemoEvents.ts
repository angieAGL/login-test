import { IDemoRepository } from "../aplicacion/interfaces/IDemoRepository";
import { ITipoRepository } from "../aplicacion/interfaces/ITipoRepository";
import { MostrarTablaDemoUseCase } from "../aplicacion/use-cases/MotrarTablaDemoUseCase";
import { EliminarDemoUseCase } from "../aplicacion/use-cases/EliminarDemoUseCase";
import { AgregarDemoUseCase } from "../aplicacion/use-cases/AgregarDemoUseCase";
import { EditarDemoUseCase } from "../aplicacion/use-cases/EditarDemoUseCase";
import { Demo } from "../dominio/entidades/Demo";

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

  async onLoad() {
    const mostrarTabla = new MostrarTablaDemoUseCase(
      this._demoRepository,
      this._tipoRepository
    );

    return await mostrarTabla.mostrarTablaDemo();
  }
  async onClickEliminar(id: number) {
    const eliminarDemo = new EliminarDemoUseCase(this._demoRepository);

    return await eliminarDemo.eliminaDemo(id);
  }

  async onClickAgregar(demo: Demo) {
    const agregarDemo = new AgregarDemoUseCase(this._demoRepository);

    return await agregarDemo.agregarDemo(demo);
  }

  async onClickEditar(demo: Demo) {
    const agregarDemo = new EditarDemoUseCase(this._demoRepository);

    return await agregarDemo.editarDemo(demo);
  }
}
