import { useMemo } from "react";
import DATASET from "./DATASET.json";
import dayjs from "dayjs";

const FilasGrid = () => {
  const rows = useMemo(() => DATASET, []);
  return rows;
};

export default FilasGrid;
