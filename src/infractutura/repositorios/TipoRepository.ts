import DATASET_GENERO from "../dataSet/DATASET_GENERO.json";
import { ITipoRepository } from "../../aplicacion/interfaces/ITipoRepository";

export class TipoRepository implements ITipoRepository {
  listarGenero(): Map<number, string> {
    let genero_map: Map<number, string> = new Map();

    let listado_json = DATASET_GENERO;
    for (var i in listado_json) {
      genero_map.set(listado_json[i].id, listado_json[i].genero);
    }

    return genero_map;
  }

  listarActivo(): Map<number, boolean> {
    let activo_map: Map<number, boolean> = new Map();
    activo_map.set(0, false);
    activo_map.set(1, true);

    return activo_map;
  }
}
