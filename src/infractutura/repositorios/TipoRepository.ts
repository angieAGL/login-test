import DATASET_GENERO from "../dataSet/DATASET_GENERO.json";

export const listar_genero = () => {
  let genero_map = new Map();
  let listado_json = DATASET_GENERO;
  for (var i in listado_json) {
    genero_map.set(listado_json[i].id, listado_json[i].genero);
  }
  console.log(genero_map);

  return genero_map;
};

export const listar_activo = () => {
  let activo_map = new Map();

  activo_map.set(0, "No");
  activo_map.set(1, "Si");

  return activo_map;
};
