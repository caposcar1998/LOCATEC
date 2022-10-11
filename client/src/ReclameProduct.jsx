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
 

const ReclameProduct = () =>{
    return(
       <div className="App">
        <div>


        <fieldset>
      <h2 class="fs-title">Reclamo un artículo</h2>
      <br></br>
      <h4 class="fs-subtitle">Ingresa tus datos</h4>
      <br></br>
      <input type="text" id="name"name="name" placeholder="Persona que reclama" />
      <br></br>
      <br></br>
      <input type="text" id="matricula"name="matricula" placeholder="Matricula" />
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

export default ReclameProduct;