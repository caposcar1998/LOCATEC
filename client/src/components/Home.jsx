import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBeer, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import Upload from './Helpers/Upload';

function Home(){

    const [message, setMessage] = useState('');

    const handleChange = () => {    
        console.log('value is:', message);
      };

    return(
        <div class="contenedor">
        <Container>
            <div class="header-buscador">
            <br/>
            <br/>
            <Col>
            <Row className="justify-content-md-center">
            <h1 class="tituloBlanco">Support Center & Knowledge base</h1>
            <br/>
            <h2 class="tituloBlanco">Find advice and answers from our support team fast or get in touch</h2>
            </Row>
            <br/>
             <Row className="justify-content-md-center">
             <Form.Control style={{ width: '50%' }} type="text" placeholder="Buscar" onChange={event => setMessage(event.target.value)} />
            </Row>
            <br/>
            <Row className="justify-content-md-center">
            <Button style={{ width: '25%' }} variant="primary" onClick={handleChange}>Buscar</Button>
            </Row>
            </Col>
            <br/>
            <br/>
            </div>

            <br/>

            <div class="prueba1">
                <h1>Find your answer by subject</h1>
                <br></br>
                <div class="presentacionCartas">
                    <div class="carta">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>Installation</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet ipsum
                            dolor sit amet ipsum solor sit amet.
                        </Card.Text>
                        <Button variant="primary">Ir</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div class="carta">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>Billing & Pricing</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet ipsum
                            dolor sit amet ipsum solor sit amet.
                        </Card.Text>
                        <Button variant="primary">Ir</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div class="carta">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>Features</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet ipsum
                            dolor sit amet ipsum solor sit amet.
                        </Card.Text>
                        <Button variant="primary">Ir</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>

            <br/>
            <br />
            <div class="cuadro">
                <h1>Didn’t find an answer to your question?</h1>
                <p>Musce libero nunc, dignissim quis turpis quis, semper vehicula dolor. Suspendisse tincidunt consequat quam.</p>
            <Button>Contact us</Button>
           </div>

           <br/>
           <br />

           <footer>
           <div class="pie">
            <div>
            <p>Copyright © 2020 Designed and Developed by themefisher.</p>
            </div>
            <div>
            <p><FaFacebookSquare/><FaTwitterSquare/></p>
            </div>
            </div>
           </footer>
           <br/>
           <br />

        </Container>
        </div>
    )
}

export default Home