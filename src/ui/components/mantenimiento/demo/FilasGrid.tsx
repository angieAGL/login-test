import { useMemo } from "react";
import DATASET from "./DATASET.json";
type Data ={
  id:number,
  nombre:string,
  apellido:string,
  email:string,
  genero:string,
  numero: number,
  fecha:string,
  activo:boolean,
}
const FilasGrid = () => {
  const rows: Array<Data> = useMemo(() => DATASET, []);
  return rows;
};

export default FilasGrid;
