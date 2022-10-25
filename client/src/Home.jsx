import React, { useEffect, useState } from "react";
import { Button, 
  InputGroup,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap'
import './App.css'
import CreateProduct from "./CreateProduct";
import ReclameProduct from "./ReclameProduct";
import CreateUser from "./CreateUser";
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
import Header from "./components/Header";
import axios from "axios";

export const Home = () =>{

    const [productFound, setProductFound] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:5000/product")
        .then(function (response) {
            console.log(response)
          setProductFound(response["data"]["result"])
        });
      }, []);

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if(!isAuthenticated){
        return <div>
            <LoginButton/>
        </div>
    }
    else {
        return (
            <div className="App">
                <Header />
                <LogoutButton/>
                
                <div>
                </div>
                <div>
                    <a>
                        <img src="/campus.jpg" className="logoprueba" alt="Vite logo" style={{
                            height: 580,
                            width: 1020,
                        }}/>
                    </a>
                </div>
                <div>
                    <a href="https://tec.mx/es" target="_blank">
                        <img src="/logoborrego.png" className="logo react" alt="React logo"/>
                    </a>
                </div>
                <h1>¿Qué artículo estás buscando?</h1>
                <div className='busqueda'>
                    <img src="/teus.png" className="logo" alt="teus logo"/>
                    <InputGroup className='barra'>
                        <Input placeholder='El artículo que busco es...'/>
                        <Button color="primary">
                            Buscar
                        </Button>
                    </InputGroup>
                </div>
                <br/>
                <div>
                    <Button outline color="info" href="/Catalogo"> Ir al catálogo </Button>
                </div>
                <br/>

                <div className="cardi">
                {productFound.map(function(object, i){
                        return <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src={object["Picture"]}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {object["Name"]}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Lugar: {object["Location"]}
                            </CardSubtitle>
                            <CardText>
                                {object["Description"]}
                            </CardText>
                            <Button outline color="info">
                                Ir
                            </Button>
                        </CardBody>
                    </Card>
                })}

                </div>
                <br/>
                <p className="read-the-docs">
                    Calle del Puente 222, Col. Ejidos de Huipulco, Tlalpan, Ciudad de México, C.P. 14380 D.R.© INSTITUTO
                    TECNOLÓGICO Y DE ESTUDIOS SUPERIORES DE MONTERREY, MÉXICO. 2022
                </p>
            </div>
        );
    }
}