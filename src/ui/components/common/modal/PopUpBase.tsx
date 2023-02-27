import React from "react";
import Modal from "react-bootstrap/Modal";
const PopUpBase = ({ show, mensaje, botones }: any) => {
  return (
    <>
      <Modal show={show} centered>
        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>{botones}</Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUpBase;
