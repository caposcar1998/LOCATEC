import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardD({name, description, pic, recover, idProduct, deleteA, found, looker}) {


    const [a, setA] = useState("")

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
                <Card.Text>
                {description}
                </Card.Text>
                <p>Entregado a :{a} </p>
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
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="success" onClick={()=> recover(idProduct)}>Recuperar</Button>
                <Button variant="danger" onClick={()=> deleteA(idProduct)}>Eliminar</Button>
                <Button variant="warning">Editar</Button>
            </Card.Body>
            </Card>
        </> 
        }    
        </>   
        

    )
}

export default CardD;