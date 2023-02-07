import { Demo } from "../../dominio/Demo";
import DATASET_DEMO from "../dataSet/DATASET_DEMO.json";

export const listarDemo = () => {
  let listado_demo: Demo[] = [];
  let listado_json = DATASET_DEMO;

  for (var i in listado_json) {
    listado_demo.push(listado_json[i]);
  }

  return listado_demo;
};
