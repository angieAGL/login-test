import { useMemo } from "react";
import DATASET from "./DATASET.json";
import {DatosInterfaces} from "../../common/grids/Interfaces/DatosInterface"

const FilasGrid = () => {
  const rows: Array<DatosInterfaces> = useMemo(() => DATASET, []);
  return rows;
};

export default FilasGrid;
