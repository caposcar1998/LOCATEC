import React, { useEffect, useState } from "react";
import CardD from "./Card";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

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
        <>
        {products.map((item, index) => (
        <CardD
        name={item["Name"]}
        description={item["Description"]}
        pic={item["Picture"]}
        />
    ))}
        </>
    )
}

export default Catalogo;