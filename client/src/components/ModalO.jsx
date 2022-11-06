import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalO({show, handleClose, action, title, description, titleAction}){
    
    function makeAction(){
        action()
        handleClose()
    }
    
    return (
        <>    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={makeAction}>
                {titleAction}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );

}

export default ModalO