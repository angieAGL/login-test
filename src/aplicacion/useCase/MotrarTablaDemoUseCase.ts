import { Demo } from "../../dominio/Demo";
import { ITipoRepository } from "../interfaces/ITipoRepository";
import { IDemoRepository } from "../interfaces/IDemoRepository";

export class MostrarTablaDemoUseCase {
  private _demoRepository: IDemoRepository;
  private _tipoRepository: ITipoRepository;

  constructor(
    demoRepository: IDemoRepository,
    tipoRepository: ITipoRepository
  ) {
    this._demoRepository = demoRepository;
    this._tipoRepository = tipoRepository;
  }

  mostrarTablaDemo(): object {
    const lista_demo: Demo[] = this._demoRepository.listarDemo();

    const map_genero: Map<number, string> = this._tipoRepository.listarGenero();
    const map_activo: Map<number, string> = this._tipoRepository.listarActivo();
    const tablaDemo = {
      demo: lista_demo,
      genero: map_genero,
      activo: map_activo,
    };

    return { tablaDemo };
  }
}
