import { useMemo } from "react";
import DATASET_DEMO from "../../../../infractutura/dataSet/DATASET_DEMO.json";
import { DatosInterfaces } from "../../common/grids/Interfaces/DatosInterface";

const FilasGrid = () => {
  const rows: Array<DatosInterfaces> = useMemo(() => DATASET_DEMO, []);
  return rows;
};

export default FilasGrid;
