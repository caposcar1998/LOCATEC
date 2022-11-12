import { useAuth0 } from "@auth0/auth0-react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

const NavBar = () =>{

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
        const navigate = useNavigate();
      
        function handleClick(route) {
            navigate(route);
        }


    function LogOut(){
        logout({ returnTo: window.location.origin })
    }

    return(
        <Container>

    <Navbar bg="light" expand="lg">
      <>
        <Navbar.Brand href="#home">LOCATEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => {handleClick("/");}}>Home</Nav.Link>
            <Nav.Link onClick={() => {handleClick("/catalogo");}}>Objetos</Nav.Link>
            {
                isAuthenticated ?
                  <>
                    
                    <Nav.Link onClick={() => {handleClick("/usuario");}}>Usuarios</Nav.Link>
                    <Nav.Item><Button variant="outline-danger" onClick={LogOut}>Logout</Button></Nav.Item> 
                  </>
                :
                    <Nav.Item><Button variant="outline-success" onClick={loginWithRedirect}>Login</Button></Nav.Item>
            }
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
    </Container>
    )
}

export default NavBar;