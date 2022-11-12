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
    const [locationS, setLocationS] = useState()
    const [colorS, setColorS] = useState()
    const [categoryS, setCategoryS] = useState()

    function resetSearch(){
        reset()
        setIdS("")
        setLocationS("")
        setColorS("")
        setnameS("")
        setCategoryS("")
    }

    function searchInArray(){
        const found = [...searchId(), ...searchName(), ...searchLocation(), ...searchColor(), ...seachCategory()];
        changeArray(found)
    }

    function searchName(){
        console.table(arraySearch.filter(nameA => nameA.Name == nameS ))
        return arraySearch.filter(nameA => nameA == nameS )
    }

    function searchId(){
        return arraySearch.filter(idA => idA.ID == idS )
    }

    function searchLocation(){
        return arraySearch.filter(locationA => locationA.Location == locationS )
    }

    function searchColor(){
        return arraySearch.filter(colorA => colorA.Color == colorS )
    }

    function seachCategory(){
        return arraySearch.filter(categoryA => categoryA.Category == categoryS )
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
                        title={locationS ? locationS : "Lugar"}
                        defaultValue={""}
                        >
                            <Dropdown.Item value="Cenote" onClick={() => setLocationS("Cenote")}>Cenote</Dropdown.Item>
                            <Dropdown.Item value="Aulas 1" onClick={() => setLocationS("Aulas 1")}>Aulas 1</Dropdown.Item>
                            <Dropdown.Item value="Aulas 2" onClick={() => setLocationS("Aulas 2")}>Aulas 2</Dropdown.Item>
                            <Dropdown.Item value="CDTC" onClick={() => setLocationS("CDTC")}>CDTC</Dropdown.Item>
                            <Dropdown.Item value="Gym" onClick={() => setLocationS("Gym")}>Gym</Dropdown.Item>
                            <Dropdown.Item value="Biblioteca" onClick={() => setLocationS("Biblioteca")}>Biblioteca</Dropdown.Item>
                            <Dropdown.Item value="Estacionamiento" onClick={() => setLocationS("Estacionamiento")}>Estacionamiento</Dropdown.Item>
                            <Dropdown.Item value="Disney" onClick={() => setLocationS("Disney")}>Disney</Dropdown.Item>
                            <Dropdown.Item value="Estacionamiento Disney" onClick={() => setLocationS("Estacionamiento Disney")}>Estacionamiento Disney</Dropdown.Item>
                            <Dropdown.Item value="Edificio Sur" onClick={() => setLocationS("Edificio Sur")}>Edificio Sur</Dropdown.Item>
                            <Dropdown.Item value="Otro" onClick={() => setLocationS("Otro")}>Otro</Dropdown.Item>

                    </DropdownButton>
                    </Col>
                    <Col>
                        <DropdownButton
                            variant="outline-secondary"
                            title={categoryS ? categoryS : "Categoria"}
                            defaultValue={""}
                            >
                                <Dropdown.Item value="Celular" onClick={() => setCategoryS("Celular")}>Celular</Dropdown.Item>
                                <Dropdown.Item value="Computadora" onClick={() => setCategoryS("Computadora")}>Computadora</Dropdown.Item>
                                <Dropdown.Item value="Tablet" onClick={() => setCategoryS("Tablet")}>Tablet</Dropdown.Item>
                                <Dropdown.Item value="Mochila" onClick={() => setCategoryS("Mochila")}>Mochila</Dropdown.Item>
                                <Dropdown.Item value="Tecnologia" onClick={() => setCategoryS("Tecnologia")}>Tecnologia</Dropdown.Item>
                                <Dropdown.Item value="Ropa" onClick={() => setCategoryS("Ropa")}>Ropa</Dropdown.Item>
                                <Dropdown.Item value="Audifonos" onClick={() => setCategoryS("Audifonos")}>Audifonos</Dropdown.Item>
                                <Dropdown.Item value="Termos" onClick={() => setCategoryS("Termos")}>Termos</Dropdown.Item>
                                <Dropdown.Item value="Tuppers" onClick={() => setCategoryS("Tuppers")}>Tuppers</Dropdown.Item>
                                <Dropdown.Item value="Otros" onClick={() => setCategoryS("Otros")}>Otros</Dropdown.Item>
                                <Dropdown.Item value="Perfumes" onClick={() => setCategoryS("Perfumes")}>Perfumes</Dropdown.Item>
                                <Dropdown.Item value="Juguetes" onClick={() => setCategoryS("Juguetes")}>Juguetes</Dropdown.Item>
                                
                        </DropdownButton>
                    </Col>
                    <Col>
                        <DropdownButton
                            variant="outline-secondary"
                            title={colorS ? colorS : "Color"}
                            defaultValue={""}
                            >
                                <Dropdown.Item value="Rojo" onClick={() => setColorS("Rojo")}>Rojo</Dropdown.Item>
                                <Dropdown.Item value="Morado" onClick={() => setColorS("Morado")}>Morado</Dropdown.Item>
                                <Dropdown.Item value="Azul" onClick={() => setColorS("Azul")}>Azul</Dropdown.Item>
                                <Dropdown.Item value="Amarillo" onClick={() => setColorS("Amarillo")}>Amarillo</Dropdown.Item>
                                <Dropdown.Item value="Naranja" onClick={() => setColorS("Naranja")}>Naranja</Dropdown.Item>
                                <Dropdown.Item value="Negro" onClick={() => setColorS("Negro")}>Negro</Dropdown.Item>
                                <Dropdown.Item value="Blanco" onClick={() => setColorS("Blanco")}>Blanco</Dropdown.Item>
                                <Dropdown.Item value="Otro" onClick={() => setColorS("Otro")}>Otro</Dropdown.Item>
                                
                        </DropdownButton>
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