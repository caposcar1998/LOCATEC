import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Search({arraySearch, changeArray, reset}){


    const [idS, setIdS] = useState()
    const [nameS, setnameS] = useState()
    const [rolS, setRolS] = useState()
    const [tuitonS, setTuitonS] = useState()

    function resetSearch(){
        reset()
        setIdS("")
        setRolS("")
        setTuitonS("")
        setnameS("")
    }

    function searchInArray(){
        const found = [...searchId(), ...searchName(), ...searchRol(), ...searchTuiton()];
        changeArray(found)
    }

    function searchName(){
        console.table(arraySearch.filter(nameA => nameA.Name == nameS ))
        return arraySearch.filter(nameA => nameA == nameS )
    }

    function searchId(){
        console.table(arraySearch.filter(idA => idA.ID == idS ))
        return arraySearch.filter(idA => idA.ID == idS )
    }

    function searchRol(){
        return arraySearch.filter(rolA => rolA.Rol == rolS )
    }

    function searchTuiton(){
        return arraySearch.filter(tuitonA => tuitonA.Tuiton == tuitonS )
    }

    return(
        <Container>
            <Col>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder={"Id"} onChange={event => setIdS(event.target.value)} />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder={"Nombre"} onChange={event => setnameS(event.target.value)} />
                    </Col>
                    <Col>
                    <DropdownButton
                        variant="outline-secondary"
                        title={rolS ? rolS : "rol"}
                        defaultValue={"Estudiante"}
                        >
                            <Dropdown.Item value="Estudiante" onClick={() => setRolS("Estudiante")}>Estudiante</Dropdown.Item>
                            <Dropdown.Item value="Profesor" onClick={() => setRolS("Profesor")}>Profesor</Dropdown.Item>
                            <Dropdown.Item value="Colaborador" onClick={() => setRolS("Colaborador")}>Colaborador</Dropdown.Item>

                    </DropdownButton>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder={"Matricula"} onChange={event => setTuitonS(event.target.value)} />
                    </Col>
                    <Col>
                        <Button variant="success" onClick={searchInArray}>Buscar</Button>
                        <Button variant="warning" onClick={resetSearch}>Reiniciar</Button>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default Search