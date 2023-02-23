import { IDemoRepository } from "../interfaces/IDemoRepository";

export class DeleteDemoUseCase {
  private _demoRepository: IDemoRepository;

  constructor(demoRepository: IDemoRepository) {
    this._demoRepository = demoRepository;
  }

  deleteDemo(id: number): boolean {
    const eliminar = this._demoRepository.delete(id);

    return eliminar;
  }
}
