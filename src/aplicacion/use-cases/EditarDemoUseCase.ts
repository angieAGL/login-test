import { Demo } from "../../dominio/entidades/Demo";
import { IDemoRepository } from "../interfaces/IDemoRepository";

export class EditarDemoUseCase {
  private _demoRepository: IDemoRepository;

  constructor(demoRepository: IDemoRepository) {
    this._demoRepository = demoRepository;
  }

  async editarDemo(demo: Demo): Promise<boolean> {
    return await this._demoRepository.editarDemo(demo);
  }
}
