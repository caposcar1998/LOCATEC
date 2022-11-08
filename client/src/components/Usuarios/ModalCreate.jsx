import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import axios from "axios";

function ModalCreate({show, setShow, setVariante, setMessageError, setShowAlert   }) {

    const [nombre, setNombre] = useState("")
    const [rol, setRol] = useState("")
    const [matricula, setMatricula] = useState("")

    function createUser(){
        console.log(nombre, rol, matricula)
        axios.post(`${import.meta.env.VITE_APP_API}/user`,
        {
            "name":nombre,
            "tuiton":matricula,
            "rol": rol
        })
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
            setMessageError("Error al crear el usuario")
            setShowAlert(true)
        })   
    }



  return (
    <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Crear nuevo usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form.Control type="text" placeholder="Nombre" onChange={event => setNombre(event.target.value)} />
                <Form.Control type="text" placeholder="Matricula" onChange={event => setMatricula(event.target.value)} />

                <DropdownButton
                    variant="outline-secondary"
                    title={rol ? rol : "rol"}
                    >
                        <Dropdown.Item value="Estudiante" onClick={() => setRol("Estudiante")}>Estudiante</Dropdown.Item>
                        <Dropdown.Item value="Profesor" onClick={() => setRol("Profesor")}>Profesor</Dropdown.Item>
                        <Dropdown.Item value="Colaborador" onClick={() => setRol("Colaborador")}>Colaborador</Dropdown.Item>

          </DropdownButton>
                <Button variant="success" onClick={createUser}>Crear</Button>
                </Modal.Body>
            </Modal>

  </>
  );
}

export default ModalCreate;