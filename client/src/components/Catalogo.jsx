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
import ModalEdit from "./Objects/ModalEdit";
import Search from "./Objects/Search.jsx";

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
    const [showEdit, setShowEdit] = useState(false)

    const [idEdit, SetIdEdit] = useState(0)
    const [nombreEdit, setNombreEdit] = useState("")
    const [descriptionEdit, setDescriptionEdit] = useState("")
    const [matriculaEdit, setMatriculaEdit] = useState("")
    const [locationEdit, setLocationEdit] = useState("")
    const [colorEdit, setColorEdit] = useState("")
    const [categoryEdit, setCategoryEdit] = useState("")
    const [urlFileEdit, setUrlFileEdit] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/1200px-Nuvola_apps_error.svg.png")
    

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

    function editProduct(idProduct, name, description, pic,  category, location, color, tuiton){
        setShowEdit(true)
        SetIdEdit(idProduct)
        setNombreEdit(name)
        setDescriptionEdit(description)
        setUrlFileEdit(pic)
        setCategoryEdit(category)
        setLocationEdit(location)
        setMatriculaEdit(tuiton)
        setColorEdit(color)
    }

    function retrieveProducts(){
        axios.get(`${import.meta.env.VITE_APP_API}/product`)
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
        axios.delete(`${import.meta.env.VITE_APP_API}/product/${productDelete}`)
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
            {showEdit &&
                <ModalEdit
                show={showEdit}
                setShow={setShowEdit}
                setVariante={setVariante}
                setMessageError={setMessageError}
                setShowAlert={setShowAlert}
                idProduct={idEdit}
                nombre={nombreEdit}
                description={descriptionEdit}
                pic={urlFileEdit}
                category={categoryEdit}
                location={locationEdit}
                color={colorEdit}
                tuiton={matriculaEdit}
                />
            }
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
                   <Search arraySearch={products} changeArray={setProducts} reset={retrieveProducts}></Search>
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
                            category={item["Category"]}
                            editProduct={editProduct}
                            />
                        </Col>

                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default Catalogo;