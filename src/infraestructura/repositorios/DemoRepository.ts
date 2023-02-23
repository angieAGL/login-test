import { Demo } from "../../dominio/entidades/Demo";
import DATASET_DEMO from "../data-sets/DATASET_DEMO.json";
import { IDemoRepository } from "../../aplicacion/interfaces/IDemoRepository";

export class DemoRepository implements IDemoRepository {
  listarDemo(): Demo[] {
    let listado_json = DATASET_DEMO;
    return listado_json;
  }

  delete(id: number): boolean {
    let listaDemo = this.listarDemo();

    for (var i in listaDemo) {
      if (listaDemo[i].id === id) {
        listaDemo[i].activo = false;

        return true;
      }
    }

    return false;
  }
}
