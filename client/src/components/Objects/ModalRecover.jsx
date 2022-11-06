import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalRecover({show, setShow, setVariante, setMessageError, setShowAlert, idArticulo   }) {

    const [matricula, setMatricula] = useState("")
    const [nombre, setNombre] = useState("")
    const [id, SetId] = useState(0)
    const status = true

    function findTuiton(){
        axios.get(`http://localhost:5000/tuiton/${matricula}`).then(response => {
            if (response["data"]["code"] == 500){
                setShow(false)
                setVariante("warning")
                setMessageError("La matricula no existe, favor de crear el usuario")
                setShowAlert(true)
            }else{
                SetId(response["data"]["result"]["ID"])
                setNombre(response["data"]["result"]["Name"])
            }

            console.log(response)
        })
        .catch(e => {
            setShow(false)
            console.log(e)
            setVariante("danger")
            setMessageError("Error al buscar")
            setShowAlert(true)
        })   
    }

    function deliverProduct(){
        axios.put(`http://localhost:5000/product/${idArticulo}/status/${status}/looker/${id}`)        
        .then(response => {
            setShow(false)
            console.log(response)
            setVariante("success")
            setMessageError("Operacion realizada con exito")
            setShowAlert(true)   
            window.location.reload(false);
            
        })
        .catch(e => {
            setShow(false)
            console.log(e)
            setVariante("danger")
            setMessageError("Error al entregar el producto")
            setShowAlert(true)
        })   
    }


  return (
    <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Entregar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Container>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Matricula" onChange={event => setMatricula(event.target.value)} />
                        </Col>
                        <Col>
                            <Button variant="primary" onClick={findTuiton}>Buscar por matricula</Button>
                        </Col>
                    </Row>
                    <Row>{nombre && nombre}</Row>
                </Container>
                {
                    nombre ?
                        <Button variant="success" onClick={deliverProduct}>Entregar</Button>
                    :
                        <Button variant="secondary" disabled>Entregar</Button>
                }
                
                </Modal.Body>
            </Modal>

  </>
  );
}

export default ModalRecover;