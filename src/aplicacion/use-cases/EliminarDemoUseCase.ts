import { IDemoRepository } from "../interfaces/IDemoRepository";

export class EliminarDemoUseCase {
  private _demoRepository: IDemoRepository;

  constructor(demoRepository: IDemoRepository) {
    this._demoRepository = demoRepository;
  }

  async eliminaDemo(id: number): Promise<boolean> {
    return await this._demoRepository.eliminarDemo(id);
  }
}
