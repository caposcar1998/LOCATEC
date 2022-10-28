import React from "react";
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
  import axios from 'axios';
  import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
  import Header from "./components/Header";
 

const CreateUser = () =>{
    return(
       <div className="App">
        <Header />
        <div>

        <fieldset>
      <h2 class="fs-title">Esto es Creacion de usuarios</h2>
      <br></br>
      <h4 class="fs-subtitle">Ingresa los datos del artículo encontrado</h4>
      <br></br>
      <input type="text" id="name"name="name" placeholder="Nombre del artículo" />
      <br></br>
      <br></br>
      <input type="text" id="description"name="description" placeholder="Descripción" />
      <br></br>
      <br></br>
      <input type="text" id="location"name="location" placeholder="Ubicación" />
      <br></br>
      <br></br>
      <input type="text" id="color"name="color" placeholder="Color" />
      <br></br>
      <br></br>
      <input type="text" id="category"name="category" placeholder="Categoria" />
      <br></br>
      <br></br>
      <input type="text" id="finder"name="finder" placeholder="Encontrado por" />
      <br></br>
      <br></br>
      <label for="rol">Rol</label>
      <br></br>
        <select name="rol" id="rol">
        <option value="estudiante">Estudiante</option>
        <option value="docente">Docente</option>
        <option value="admin">Administrador</option>
        </select>
      <br></br>
      <br></br>
      <a href="/"><input type="button" name="next" class="back back-button" value="Regresar" /></a>
      <a href="/"><input type="button" name="next" class="next next-button" value="Siguiente" /></a>
</fieldset>

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

export default CreateUser;