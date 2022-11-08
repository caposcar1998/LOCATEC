import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';

function Search({setProductsFound}){

    const [filterProducts, setFilterProducts] = useState([])
    const [arraySearch, setSearchArray] = useState([])
    const [searchStatement, setSearchStatement] = useState()

    function searchProducts(){
        axios.get(`${import.meta.env.VITE_APP_API}/product`)
        .then(response => {
            setSearchArray(response["data"]["result"])
        }).then(products => {
            searchInArray()
        }).then(e => { 
            console.log(filterProducts)
            setProductsFound(filterProducts)
        })
        .catch(e => {
            console.log(e)
        })
    }

    function searchInArray(){
        const found = [...searchId(), ...searchName(), ...searchLocation(), ...searchColor(), ...seachCategory()];
        setFilterProducts(found)
    }

    function searchName(){
        try{
            return arraySearch.filter(nameA => nameA.Name.toLowerCase().includes(searchStatement.toLowerCase()) )
        }
        catch (e){
            return arraySearch.filter(nameA => nameA.includes(searchStatement) )

        }
    }

    function searchId(){
        return arraySearch.filter(idA => idA.ID == searchStatement )
    }

    function searchLocation(){
        try{
            return arraySearch.filter(locationA => locationA.Location.toLowerCase().includes(searchStatement.toLowerCase()) )

        }catch{
            return arraySearch.filter(locationA => locationA.Location.includes(searchStatement) )

        }
    }

    function searchColor(){
        try{
            return arraySearch.filter(colorA => colorA.Color.toLowerCase().includes(searchStatement.toLowerCase() ))
        }catch{
            return arraySearch.filter(colorA => colorA.Color.includes(searchStatement ))

        }
    }

    function seachCategory(){
        try{
            return arraySearch.filter(categoryA => categoryA.Category.toLowerCase().includes(searchStatement.toLowerCase() ))

        }catch{
            return arraySearch.filter(categoryA => categoryA.Category.includes(searchStatement ))

        }
    }


    return(
        <Col>
        <Row className="justify-content-md-center">
        <h1 class="tituloBlanco">LOCATEC</h1>
        <br/>
        <h2 class="tituloBlanco">Busca y encuentra tus productos perdidos con nosotros</h2>
        </Row>
        <br/>
         <Row className="justify-content-md-center">
         <Form.Control style={{ width: '50%' }} type="text" placeholder="Buscar" value={searchStatement} onChange={event => setSearchStatement(event.target.value)} />
        </Row>
        <br/>
        <Row className="justify-content-md-center">
            {searchStatement ?
                <Button style={{ width: '25%' }} variant="primary" onClick={searchProducts}>Buscar</Button>
            :
                <Button style={{ width: '25%' }} variant="primary" disabled>Buscar</Button>
            }
        </Row>
        </Col>
    )
}

export default Search