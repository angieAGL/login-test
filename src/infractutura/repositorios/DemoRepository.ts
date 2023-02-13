import { Demo } from "../../dominio/entidad/Demo";
import DATASET_DEMO from "../data-set/DATASET_DEMO.json";
import { IDemoRepository } from "../../aplicacion/interfaces/IDemoRepository";

export class DemoRepository implements IDemoRepository {
  listarDemo(): Demo[] {
    let listado_demo: Demo[] = [];
    let listado_json = DATASET_DEMO;

    for (var i in listado_json) {
      listado_demo.push(listado_json[i]);
    }

    return listado_demo;
  }
}
