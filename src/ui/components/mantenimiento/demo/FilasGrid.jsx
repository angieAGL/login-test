import { useMemo } from "react";
import DATASET from "./DATASET.json";

const FilasGrid = () => {
  const rows = useMemo(() => DATASET, []);
  return rows;
};

export default FilasGrid;
