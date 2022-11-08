import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardD({name, description, pic, recover, idProduct, deleteA, found, looker, color, category, location}) {


    const [a, setA] = useState("")
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        findUser()
      }, []);

    function findUser(){
        axios.get(`http://localhost:5000/user/${looker}`).then(response => {
            if (response["data"]["code"] == 500){
                setA("Error")
            }else{
                setA(response["data"]["result"]["Tuiton"])
                
            }
        })
        .catch(e => {
            setA("Error")
        })   
    }

    return(
        <>
        {found == true ?
            <>
            <Card style={{ width: '18rem' }}>
            <Card.Img 
            variant="top"
            src={pic}
            style={{
                "max-height": "250px",
                "max-width": "350px"
            }}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Text>
                {description}
                </Card.Text>
                </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Color: {color}</ListGroup.Item>
                        <ListGroup.Item>Ubicación {location}</ListGroup.Item>
                    </ListGroup>
                <Card.Body>
                <p>Entregado a :{isAuthenticated ? a : " Privado"} </p>
            </Card.Body>
            </Card>
        </>       
        :
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img 
            variant="top"
            src={pic}
            style={{
                "max-height": "250px",
                "max-width": "350px"
            }}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Text>
                {description}
                </Card.Text>
                </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Color: {color}</ListGroup.Item>
                        <ListGroup.Item>Ubicación {location}</ListGroup.Item>
                    </ListGroup>
                <Card.Body>
                {!isAuthenticated ?
                    <p>Puedes pasar a LOCATEC por el producto</p>
                :
                    <>
                        <Button variant="success" onClick={()=> recover(idProduct)}>Recuperar</Button>
                        <Button variant="danger" onClick={()=> deleteA(idProduct)}>Eliminar</Button>
                        <Button variant="warning">Editar</Button>
                    </>
                }
            </Card.Body>
            </Card>
        </> 
        }    
        </>   
        

    )
}

export default CardD;