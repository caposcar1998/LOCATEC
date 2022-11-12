import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import axios from "axios";

function ModalEdit({show, setShow, setVariante, setMessageError, setShowAlert, nombre, rol, matricula, id   }) {

    const [nombreO, setNombre] = useState()
    const [rolO, setRol] = useState()
    const [matriculaO, setMatricula] = useState()
    const [idO, setIdO] = useState(0)

    useEffect(() => {
        setNombre(nombre)
        setRol(rol)
        setMatricula(matricula)
        setIdO(id)
      }, []);

    function editUser(){
        console.log(nombre, rol, matricula)
        axios.put(`${import.meta.env.VITE_APP_API}/user/${idO}`,
        {
            "name":nombreO,
            "tuiton":rolO,
            "rol": matriculaO
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
            setMessageError("Error al editar el usuario")
            setShowAlert(true)
        })   
    }



  return (
    <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form.Control type="text" defaultValue={nombreO} placeholder="Nombre" onChange={event => setNombre(event.target.value)} />
                <Form.Control type="text" defaultValue={matriculaO} placeholder="Matricula" onChange={event => setMatricula(event.target.value)} />

                <DropdownButton
                    variant="outline-secondary"
                    title={rolO ? rolO : "rol"}
                    defaultValue={rolO}
                    >
                        <Dropdown.Item value="Estudiante" onClick={() => setRol("Estudiante")}>Estudiante</Dropdown.Item>
                        <Dropdown.Item value="Profesor" onClick={() => setRol("Profesor")}>Profesor</Dropdown.Item>
                        <Dropdown.Item value="Colaborador" onClick={() => setRol("Colaborador")}>Colaborador</Dropdown.Item>

          </DropdownButton>
                <Button variant="success" onClick={editUser}>Editar</Button>
                </Modal.Body>
            </Modal>

  </>
  );
}

export default ModalEdit;