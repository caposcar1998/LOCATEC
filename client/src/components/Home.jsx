import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Search from './Helpers/Search';
import CardD from './Card';

function Home(){

    const [message, setMessage] = useState('');
    const [productsFound, setProductsFound] = useState([])

    return(
        <div class="contenedor">
        <Container>
            <div class="header-buscador">
            <br/>
            <br/>
            <Search
            setProductsFound={setProductsFound}
            />
            <br/>
            <br/>
            </div>

            <br/>

            <div class="prueba1">
                <h1>Enciende el Cambio</h1>
                <br></br>
                <div class="cuadro">
                    <h1>Búsqueda rápida</h1>
                    {productsFound.length > 0 ?
                    productsFound.map((item, index) => (
                        <CardD
                        name={item["Name"]}
                        description={item["Description"]}
                        pic={item["Picture"]}
                        recover={null}
                        idProduct={item["ID"]}
                        />
                        ))
                    :
                        <p>Busca algun producto en la parte de arriba</p>
                }
                </div>
                <br></br>
                <br></br>
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