import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import ModalO from "./ModalO";
import AlertO from "./AlertO";

function Usuario(){

    const [users, setUsers] = useState([])
    const [userDelete, setUserDelete] = useState()
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [messageError, setMessageError] = useState('')
    const [variante, setVariante]= useState("primary")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function selectUserDelete(idUser){
        handleShow()
        setUserDelete(idUser)
    }

    function retrieveUsers(){
        axios.get("http://localhost:5000/user")
        .then(response => {
            setUsers(response["data"]["result"])
            console.log(response)
        })
        .catch(e => {
                setVariante("danger")
                setMessageError("Error al obtener usuarios")
                setShowAlert(true)
        })
    }

    function deleteUsers(){
        axios.delete(`http://localhost:5000/user/${userDelete}`)
        .then(response => {
            if (response["data"]["code"] == 500 ){
                setVariante("danger")
                setMessageError("Usuario ligado a un producto ya creado, borrar producto")
                setShowAlert(true)
            }else{
                setVariante("success")
                setMessageError("Operacion realizada con exito")
                setShowAlert(true)                
            }
        })
        .catch(e => {
                setVariante("danger")
                setMessageError("Error al eliminar usuario")
                setShowAlert(true)
        })
    }

    function createUser(){
        axios.post(`http://localhost:5000/user`)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e)
            return (<Alert key={"danger"} variant={"danger"}>
            {e}
          </Alert>)
        })   
    }

    useEffect(() => {
        retrieveUsers()
      }, []);

    return(
        <Container>
            <AlertO
            message={messageError}
            variant={variante}
            showValue={showAlert}
            setShowValue={setShowAlert}
            />
            <ModalO
            show={show}
            handleClose={handleClose}
            action={deleteUsers}
            title={"Eliminar usuario"}
            description={"Estas seguro que deseas eliminar este usuario?"}
            titleAction={"Si"}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Matricula</th>
                    <th>
                        Accion
                        <Button variant="primary">Crear Nuevo</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {users.map((item, index) => ( 
                    <tr>
                    <td>{item["ID"]}</td>
                    <td>{item["Name"]}</td>
                    <td>{item["Rol"]}</td>
                    <td>{item["Tuiton"]}</td>
                    <td>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger" onClick={() => selectUserDelete(item["ID"])}>Eliminar</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>   
        </Container>
    )
}

export default Usuario;