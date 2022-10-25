import React from "react";
import { Button, 
    InputGroup,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Form,
    FormGroup,
    Label
  } from 'reactstrap'
  import './App.css'
  import axios from 'axios';
  import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
  import Header from "./components/Header";
 

const CreateProduct = () =>{
    return(
       <div className="App">
        <Header />
        <div>
      <div>
        <h1>Encontre un artículo</h1>
        <br></br>
        <h4 class="fs-subtitle">Ingresa los datos del artículo encontrado</h4>
        <br></br>
        <Form class="fo">
        <FormGroup class="formulario">
        <Label for="name">Nombre: </Label>
        <Input type="text" id="name"name="name" placeholder="Nombre del artículo" />
        </FormGroup>
        <FormGroup class="formulario">
        <Label for="description">Descripcion: </Label>
        <Input type="text" id="description"name="description" placeholder="Descripción" />
        </FormGroup>
        <FormGroup class="formulario">
        <Label for="location">Lugar donde se encontro: </Label> 
        <Input type="text" id="location"name="location" placeholder="Ubicación" />
        </FormGroup>
        <FormGroup class="formulario">
        <Label for="color">Color del articulo encontrado: </Label> 
        <Input type="text" id="color"name="color" placeholder="Color" />
        </FormGroup>
        <FormGroup class="formulario">
        <Label for="category">Categoria: </Label> 
        <Input type="text" id="category"name="category" placeholder="Categoria" />
        </FormGroup>
        <FormGroup class="formulario">
        <Label for="finder">Encontrado por: </Label> 
        <Input type="text" id="finder"name="finder" placeholder="Encontrado por" />
        </FormGroup>
        <FormGroup class="formulario">
        <Label for="rol">Rol:</Label>
          <Input type="select" name="rol" id="rol">
          <option value="estudiante">Estudiante</option>
          <option value="docente">Docente</option>
          <option value="admin">Administrador</option>
          </Input>
        </FormGroup>
        <br></br>
        <Button outline color="success" href="/" type="submit" name="next" class="back back-button" value="Regresar">Subir Articulo</Button>
      </Form>
      </div>
      

        </div>
        <div>
          <a href="https://tec.mx/es" target="_blank">
            <img src="/logoborrego.png" className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>¿Qué artículo estás buscando?</h1>
        <div className='busqueda'>
        <img src="/teus.png" className="logo" alt="teus logo" />
        <InputGroup className='barra'>
          <Input placeholder='El artículo que busco es...'/>
          <Button color="primary">
            Buscar
          </Button>
        </InputGroup>
        </div>
        <br />
        <div>
        <Button outline color="info" href="/Catalogo"> Ir al catálogo </Button>
        </div>

  


        <br />
        <br/>
        <p className="read-the-docs">
          Calle del Puente 222, Col. Ejidos de Huipulco, Tlalpan, Ciudad de México, C.P. 14380 D.R.© INSTITUTO TECNOLÓGICO Y DE ESTUDIOS SUPERIORES DE MONTERREY, MÉXICO. 2022
        </p>

        <script src="jquery.js"></script>
      </div>
    )
}

export default CreateProduct;