import { useMemo } from "react";
import DATASET_DEMO from "../../../../infractutura/dataSet/DATASET_DEMO.json";
import { Demo } from "../../../../dominio/Demo";

const FilasGrid = () => {
  const rows: Array<Demo> = useMemo(() => DATASET_DEMO, []);
  return rows;
};

export default FilasGrid;
