import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Upload from './Helpers/Upload';

function Home(){

    const [message, setMessage] = useState('');

    const handleChange = () => {    
        console.log('value is:', message);
      };

    return(
        <div class="contenedor">
        <Upload/>
        <Container>
            <div class="header-buscador">
            <br/>
            <br/>
            <Col>
            <Row className="justify-content-md-center">
            <h1 class="tituloBlanco">LOCATEC</h1>
            <br/>
            <h2 class="tituloBlanco">Busca y encuentra tus productos perdidos con nosotros</h2>
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
                <h1>Enciende el Cambio</h1>
                <br></br>
                <div class="presentacionCartas">
                    <div class="carta">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://serv1.raiolanetworks.es/blog/wp-content/uploads/seguridadwordpress1-300x300.png" />
                        <Card.Body>
                        <Card.Title>Seguridad</Card.Title>
                        <Card.Text>
                            Tus objetos perdidos siempre estaran seguros con nosotros
                        </Card.Text>
                        <Button variant="primary">Ir</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div class="carta">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2103/2103853.png" />
                        <Card.Body>
                        <Card.Title>Búsqueda eficiente</Card.Title>
                        <Card.Text>
                            Encuentra tus productos a unos clicks de distancia
                        </Card.Text>
                        <Button variant="primary">Ir</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div class="carta">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/6116/6116634.png" />
                        <Card.Body>
                        <Card.Title>Alta disponibilidad</Card.Title>
                        <Card.Text>
                            Busca en cualquier momento tu producto perdido
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
                <h1>Búsqueda rápida</h1>
                <p></p>
           </div>

           <br/>
           <br />

           <footer>
           <div class="pie">
            <div>
            <p>Técnologico de Monterrey, LOCATEC por: Oscar Contreras, Oscar Belmont, David Arturo y Oscar Vargas</p>
            </div>
            <div>
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