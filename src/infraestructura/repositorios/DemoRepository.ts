import { Demo } from "../../dominio/entidades/Demo";
import DATASET_DEMO from "../data-sets/DATASET_DEMO.json";
import { IDemoRepository } from "../../aplicacion/interfaces/IDemoRepository";

export class DemoRepository implements IDemoRepository {
  listarDemo(): Demo[] {
    let listado_json = DATASET_DEMO;
    return listado_json;
  }

  eliminarDemo(id: number): boolean {
    for (var i in DATASET_DEMO) {
      if (DATASET_DEMO[i].id === id) {
        DATASET_DEMO[i].activo = false;
        return true;
      }
    }

    return false;
  }
}
