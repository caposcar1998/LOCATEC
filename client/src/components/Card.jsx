import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardD({name, description, pic}){



    return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">Recuperar</Button>
                <Button variant="primary">Eliminar</Button>
                <Button variant="primary">Editar</Button>
            </Card.Body>
            </Card>
        </>
    )
}

export default CardD;