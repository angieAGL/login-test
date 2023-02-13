import DATASET_GENERO from "../datas-set/DATASET_GENERO.json";
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

  listarActivo(): Map<boolean, string> {
    let activo_map: Map<boolean, string> = new Map();
    activo_map.set(false, "No");
    activo_map.set(true, "Si");

    return activo_map;
  }
}
