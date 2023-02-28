import { IDemoRepository } from "../interfaces/IDemoRepository";

export class EliminarDemoUseCase {
  private _demoRepository: IDemoRepository;

  constructor(demoRepository: IDemoRepository) {
    this._demoRepository = demoRepository;
  }

  eliminaDemo(id: number): boolean {
    return this._demoRepository.eliminarDemo(id);
  }
}
