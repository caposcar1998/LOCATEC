import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import ModalO from "./ModalO";
import AlertO from "./AlertO";
import ModalCreate from "./Usuarios/ModalCreate";
import ModalEdit from "./Usuarios/ModalEdit";
import Search from "./Usuarios/Search";

function Usuario(){

    const [users, setUsers] = useState([])
    const [userDelete, setUserDelete] = useState()
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [messageError, setMessageError] = useState('')
    const [variante, setVariante]= useState("primary")
    const [showCreate, setShowCreate] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [nombreEditar, setNombreEditar] = useState("")
    const [rolEditar, setRolEditar] = useState("")
    const [tuitonEdit, setTuitonEdit] = useState("")
    const [idEdit, setIdEdit] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function selectUserDelete(idUser){
        handleShow()
        setUserDelete(idUser)
    }

    function retrieveUsers(){
        axios.get(`${import.meta.env.VITE_APP_API}/user`)
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
        axios.delete(`${import.meta.env.VITE_APP_API}/user/${userDelete}`)
        .then(response => {
            if (response["data"]["code"] == 500 ){
                setVariante("danger")
                setMessageError("Usuario ligado a un producto ya creado, borrar producto")
                setShowAlert(true)
            }else{
                setVariante("success")
                setMessageError("Operacion realizada con exito")
                setShowAlert(true)  
                window.location.reload(false);               
            }
        })
        .catch(e => {
                setVariante("danger")
                setMessageError("Error al eliminar usuario")
                setShowAlert(true)
        })
    }

    function editUser(idUser, name, rol, tuiton){
        setShowEdit(true)
        setNombreEditar(name)
        setRolEditar(rol)
        setTuitonEdit(tuiton)
        setIdEdit(idUser)
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
            <ModalCreate
            show={showCreate}
            setShow={setShowCreate}
            setVariante={setVariante}
            setMessageError={setMessageError}
            setShowAlert={setShowAlert} 
            />
            {showEdit &&
                        <ModalEdit
                        show={showEdit}
                        setShow={setShowEdit}
                        setVariante={setVariante}
                        setMessageError={setMessageError}
                        setShowAlert={setShowAlert} 
                        nombre={nombreEditar}
                        rol={rolEditar}
                        matricula={tuitonEdit}
                        id={idEdit}
                        />
            }
            <Search
            arraySearch={users}
            changeArray={setUsers}  
            reset={retrieveUsers}          
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
                        <Button variant="primary" onClick={()=> setShowCreate(true)}>Crear Nuevo</Button>
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
                        <Button variant="warning" onClick={() => editUser(item["ID"], item["Name"], item["Rol"], item["Tuiton"])}>Editar</Button>
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