import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


function Home(){

    const [message, setMessage] = useState('');

    const handleChange = () => {    
        console.log('value is:', message);
      };

    return(
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

            <div class="prueba1">
                <h1>Find your answer by subject</h1>
                <br></br>
                <div class="presentacionCartas">
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
            <div>
            <h1>Didn’t find an answer to your question?</h1>
            <h2>Musce libero nunc, dignissim quis turpis quis, semper vehicula dolor. Suspendisse tincidunt consequat quam.</h2>
            <button>Contact us</button>
           </div>

           <div>
           <footer>
            <h1>Copyright © 2020 Designed and Developed by themefisher</h1>
           </footer>
           </div>
        </Container>
    )
}

export default Home