import { Demo } from "../../dominio/entidades/Demo";
import { ITipoRepository } from "../interfaces/ITipoRepository";
import { IDemoRepository } from "../interfaces/IDemoRepository";
import { MostarTablaDemoResponse } from "../../dominio/responses/MostarTablaDemoResponse";

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

  async mostrarTablaDemo(): Promise<MostarTablaDemoResponse> {
    const lista_demo: Demo[] = await this._demoRepository.listarDemo();
    const map_genero: Map<number, string> = this._tipoRepository.listarGenero();
    const map_activo: Map<boolean, string> =
      this._tipoRepository.listarActivo();
    const tablaDemo = {
      listaDemo: lista_demo,
      listaGenero: map_genero,
      listaActivo: map_activo,
    };

    return tablaDemo;
  }
}
