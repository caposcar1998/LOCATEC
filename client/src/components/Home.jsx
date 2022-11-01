import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Home(){

    const [message, setMessage] = useState('');

    const handleChange = () => {    
        console.log('value is:', message);
      };

    return(
        <Container>
            <Col></Col>
            <Col>
             <Row className="justify-content-md-center">
             <Form.Control type="text" placeholder="Buscar" onChange={event => setMessage(event.target.value)} />
             <Button variant="primary" onClick={handleChange}>Buscar</Button>
                <h1>Buscas algo en particular?</h1>
            </Row>
            </Col>
        </Container>
    )
}

export default Home