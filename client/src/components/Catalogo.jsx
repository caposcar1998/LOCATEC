import React, { useEffect, useState } from "react";
import CardD from "./Card";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

function Catalogo(){

    const [products, setProducts] = useState([])

    function retrieveProducts(){
        axios.get("http://localhost:5000/product")
        .then(response => {
            setProducts(response["data"]["result"])
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
        retrieveProducts()
      }, []);


    return(
        <Container>
            {products.map((item, index) => (
            <CardD
            name={item["Name"]}
            description={item["Description"]}
            pic={item["Picture"]}
            />
            ))}
        </Container>
    )
}

export default Catalogo;