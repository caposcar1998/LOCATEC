import React, { useEffect, useState } from "react";
import CardD from "./Card";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ModalRecover from "./Objects/ModalRecover";
import AlertO from "./AlertO";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ModalO from "./ModalO";
import ModalCreate from "./Objects/ModalCreate";
import Button from "react-bootstrap/esm/Button";

function Catalogo(){

    const [products, setProducts] = useState([])
    const [showRecover, setShowRecover] = useState(false)
    const [variante, setVariante]= useState("primary")
    const [messageError, setMessageError] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    const [productRecover, setProductRecover] = useState(0)
    const [show, setShow] = useState(false);
    const [productDelete, setProductDelete] = useState()
    const [showCreate, setShowCreate] = useState(false)
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function recoverProduct(idProduct){
        setProductRecover(idProduct)
        setShowRecover(true)
    }

    function selectUserDelete(idUser){
        handleShow()
        setProductDelete(idUser)
    }

    function retrieveProducts(){
        axios.get("http://localhost:5000/product")
        .then(response => {
            setProducts(response["data"]["result"])
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        retrieveProducts()
      }, []);

      function deleteProduct(){
        axios.delete(`http://localhost:5000/product/${productDelete}`)
        .then(response => {
            if (response["data"]["code"] == 500 ){
                setVariante("danger")
                setMessageError("Error al eliminar el producto")
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
                setMessageError("Error al eliminar el producto")
                setShowAlert(true)
        })
    }



    return(
        <Container>
            <ModalO
            show={show}
            handleClose={handleClose}
            action={deleteProduct}
            title={"Eliminar producto"}
            description={"Estas seguro que deseas eliminar este producto?"}
            titleAction={"Si"}
            />
            <AlertO
            message={messageError}
            variant={variante}
            showValue={showAlert}
            setShowValue={setShowAlert}
            />
            <ModalCreate
                show={showCreate}
                setShow={setShowCreate}
                setVariante={setVariante}
                setMessageError={setMessageError}
                setShowAlert={setShowAlert} 
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
                <Button variant="primary" onClick={()=> setShowCreate(true)}>Crear Nuevo</Button>
                </Row>
                <Row>
                    {products.map((item, index) => (
                        <Col xs={4}>
                            <CardD
                            name={item["Name"]}
                            description={item["Description"]}
                            pic={item["Picture"]}
                            recover={recoverProduct}
                            idProduct={item["ID"]}
                            deleteA={selectUserDelete}
                            found={item["Found"]}
                            looker={item["Looker"]}
                            color={item["Color"]}
                            location={item["Location"]}
                            />
                        </Col>

                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default Catalogo;