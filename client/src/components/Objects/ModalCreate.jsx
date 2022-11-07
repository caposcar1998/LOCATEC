import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Upload from '../Helpers/Upload';

function ModalCreate({show, setShow, setVariante, setMessageError, setShowAlert   }) {

    const [id, SetId] = useState(0)
    const [nombre, setNombre] = useState("")
    const [description, setDescription] = useState("")
    const [matricula, setMatricula] = useState("")
    const [location, setLocation] = useState("")
    const [finder, setFinder] = useState("")
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")
    const [uploadFile, setUploadFile] = useState(false)
    const [urlFile, setUrlFile] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/1200px-Nuvola_apps_error.svg.png")

    function createUser(){
        axios.post(`http://localhost:5000/product`,
            {
                "name": nombre ,
                "description": description,
                "location": location,
                "finder": id,
                "color": color,
                "looker": null,
                "category": category,
                "picture": urlFile
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

    function findTuiton(){
        axios.get(`http://localhost:5000/tuiton/${matricula}`).then(response => {
            if (response["data"]["code"] == 500){
                setShow(false)
                setVariante("warning")
                setMessageError("La matricula no existe, favor de crear el usuario")
                setShowAlert(true)
            }else{
                SetId(response["data"]["result"]["ID"])
                setFinder(response["data"]["result"]["Name"])
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



  return (
    <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Crear nuevo usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                        <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={event => setNombre(event.target.value)} /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Descripcion" value={description} onChange={event => setDescription(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DropdownButton
                                variant="outline-secondary"
                                title={location ? location : "Lugar"}
                                defaultValue={""}
                                >
                                    <Dropdown.Item value="Cenote" onClick={() => setLocation("Cenote")}>Cenote</Dropdown.Item>
                                    <Dropdown.Item value="Aulas 1" onClick={() => setLocation("Aulas 1")}>Aulas 1</Dropdown.Item>
                                    <Dropdown.Item value="Aulas 2" onClick={() => setLocation("Aulas 2")}>Aulas 2</Dropdown.Item>
                                    <Dropdown.Item value="CDTC" onClick={() => setLocation("CDTC")}>CDTC</Dropdown.Item>
                                    <Dropdown.Item value="Gym" onClick={() => setLocation("Gym")}>Gym</Dropdown.Item>
                                    <Dropdown.Item value="Biblioteca" onClick={() => setLocation("Biblioteca")}>Biblioteca</Dropdown.Item>
                                    <Dropdown.Item value="Estacionamiento" onClick={() => setLocation("Estacionamiento")}>Estacionamiento</Dropdown.Item>
                                    <Dropdown.Item value="Disney" onClick={() => setLocation("Disney")}>Disney</Dropdown.Item>
                                    <Dropdown.Item value="Estacionamiento Disney" onClick={() => setLocation("Estacionamiento Disney")}>Estacionamiento Disney</Dropdown.Item>
                                    <Dropdown.Item value="Edificio Sur" onClick={() => setLocation("Edificio Sur")}>Edificio Sur</Dropdown.Item>
                                    <Dropdown.Item value="Otro" onClick={() => setLocation("Otro")}>Otro</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col>
                            <DropdownButton
                                    variant="outline-secondary"
                                    title={category ? category : "Categoria"}
                                    defaultValue={""}
                                    >
                                        <Dropdown.Item value="Celular" onClick={() => setCategory("Celular")}>Celular</Dropdown.Item>
                                        <Dropdown.Item value="Computadora" onClick={() => setCategory("Computadora")}>Computadora</Dropdown.Item>
                                        <Dropdown.Item value="Tablet" onClick={() => setCategory("Tablet")}>Tablet</Dropdown.Item>
                                        <Dropdown.Item value="Mochila" onClick={() => setCategory("Mochila")}>Mochila</Dropdown.Item>
                                        <Dropdown.Item value="Tecnologia" onClick={() => setCategory("Tecnologia")}>Tecnologia</Dropdown.Item>
                                        <Dropdown.Item value="Ropa" onClick={() => setCategory("Ropa")}>Ropa</Dropdown.Item>
                                        <Dropdown.Item value="Audifonos" onClick={() => setCategory("Audifonos")}>Audifonos</Dropdown.Item>
                                        <Dropdown.Item value="Termos" onClick={() => setCategory("Termos")}>Termos</Dropdown.Item>
                                        <Dropdown.Item value="Tuppers" onClick={() => setCategory("Tuppers")}>Tuppers</Dropdown.Item>
                                        <Dropdown.Item value="Otros" onClick={() => setCategory("Otros")}>Otros</Dropdown.Item>
                                        <Dropdown.Item value="Perfumes" onClick={() => setCategory("Perfumes")}>Perfumes</Dropdown.Item>
                                        <Dropdown.Item value="Juguetes" onClick={() => setCategory("Juguetes")}>Juguetes</Dropdown.Item>
                                        
                                </DropdownButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <DropdownButton
                                variant="outline-secondary"
                                title={color ? color : "Color"}
                                defaultValue={""}
                                >
                                    <Dropdown.Item value="Rojo" onClick={() => setColor("Rojo")}>Rojo</Dropdown.Item>
                                    <Dropdown.Item value="Morado" onClick={() => setColor("Morado")}>Morado</Dropdown.Item>
                                    <Dropdown.Item value="Azul" onClick={() => setColor("Azul")}>Azul</Dropdown.Item>
                                    <Dropdown.Item value="Amarillo" onClick={() => setColor("Amarillo")}>Amarillo</Dropdown.Item>
                                    <Dropdown.Item value="Naranja" onClick={() => setColor("Naranja")}>Naranja</Dropdown.Item>
                                    <Dropdown.Item value="Negro" onClick={() => setColor("Negro")}>Negro</Dropdown.Item>
                                    <Dropdown.Item value="Blanco" onClick={() => setColor("Blanco")}>Blanco</Dropdown.Item>
                                    <Dropdown.Item value="Otro" onClick={() => setColor("Otro")}>Otro</Dropdown.Item>
                                    
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Upload
                            setUploadFile={setUploadFile}
                            setUrlFile={setUrlFile}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Matricula" onChange={event => setMatricula(event.target.value)} />
                        </Col>
                        <Col>
                            <Button variant="primary" onClick={findTuiton}>Buscar por matricula</Button>
                        </Col>
                    </Row>
                    <Row>{finder && finder}</Row>
                    {uploadFile && finder ?
                        <Button variant="success" onClick={createUser}>Crear</Button>
                    :
                        <Button variant="success" disabled>Crear</Button>
                    }

                    
                </Container>
                </Modal.Body>
            </Modal>

  </>
  );
}

export default ModalCreate;