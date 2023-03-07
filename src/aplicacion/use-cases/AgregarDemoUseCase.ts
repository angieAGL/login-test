import { Demo } from "../../dominio/entidades/Demo";
import { IDemoRepository } from "../interfaces/IDemoRepository";

export class AgregarDemoUseCase {
  private _demoRepository: IDemoRepository;

  constructor(demoRepository: IDemoRepository) {
    this._demoRepository = demoRepository;
  }

  async agregarDemo(demo: Demo): Promise<boolean> {
    return await this._demoRepository.agregarDemo(demo);
  }
}
