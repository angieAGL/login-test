import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import "../../../css/paginacion.css";
import  Boton  from "./botones/Boton";

const Paginacion = (tabla:any) => {
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = tabla;

  return (
    <div className="paginacion">
      <Boton
        text={<FaAngleDoubleLeft />}
        class_name={"btn_paginacion"}
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      ></Boton>
      <Boton
        text={<FaAngleLeft />}
        class_name={"btn_paginacion"}
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      ></Boton>

      <Boton
        text={pageIndex + 1}
        class_name={"btn_paginacion actual"}
        disabled={true}
      ></Boton>
      {pageIndex === pageCount - 1 ? (
        <div></div>
      ) : (
        <Boton
          text={pageIndex + 2}
          class_name={"btn_paginacion"}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        ></Boton>
      )}
      <Boton text={"..."} class_name={"btn_paginacion"}></Boton>

      <Boton
        text={pageOptions.length}
        class_name={"btn_paginacion"}
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      ></Boton>
      <Boton
        text={<FaAngleRight />}
        class_name={"btn_paginacion"}
        onClick={() => nextPage()}
        disabled={!canNextPage}
      ></Boton>
      <Boton
        text={<FaAngleDoubleRight />}
        class_name={"btn_paginacion"}
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      ></Boton>
    </div>
  );
};

export default Paginacion;
