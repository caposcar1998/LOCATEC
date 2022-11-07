import React, { useEffect, useState } from "react";
import CardD from "./Card";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ModalRecover from "./Objects/ModalRecover";
import AlertO from "./AlertO";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Catalogo(){

    const [products, setProducts] = useState([])
    const [showRecover, setShowRecover] = useState(false)
    const [variante, setVariante]= useState("primary")
    const [messageError, setMessageError] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    const [productRecover, setProductRecover] = useState(0)

    function recoverProduct(idProduct){
        setProductRecover(idProduct)
        setShowRecover(true)
    }

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
            <AlertO
            message={messageError}
            variant={variante}
            showValue={showAlert}
            setShowValue={setShowAlert}
            />
            {
                showRecover && <ModalRecover
                                    show={showRecover}
                                    setShow={setShowRecover}
                                    setVariante={setVariante}
                                    setMessageError={setMessageError}
                                    setShowAlert={setShowAlert} 
                                    idArticulo={productRecover}
                />
            }
            <Container>
                <Row>
                    {products.map((item, index) => (
                        <Col xs={4}>
                            <CardD
                            name={item["Name"]}
                            description={item["Description"]}
                            pic={item["Picture"]}
                            recover={recoverProduct}
                            idProduct={item["ID"]}
                            />
                        </Col>

                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default Catalogo;