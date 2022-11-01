import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

function Usuario(){

    const [users, setUsers] = useState([])

    function retrieveUsers(){
        axios.get("http://localhost:5000/user")
        .then(response => {
            setUsers(response["data"]["result"])
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
                        <Button variant="primary">Editar</Button>
                        <Button variant="primary">Eliminar</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>   
        </Container>
    )
}

export default Usuario;