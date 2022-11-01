import { useAuth0 } from "@auth0/auth0-react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from "react";

const NavBar = () =>{

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    function LogOut(){
        logout({ returnTo: window.location.origin })
    }

    return(
        <>

    <Navbar bg="light" expand="lg">
      <>
        <Navbar.Brand href="#home">LOCATEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Busca objetos</Nav.Link>
            {
                isAuthenticated ?
                    <Nav.Item><Button variant="outline-danger" onClick={LogOut}>Logout</Button></Nav.Item> 
                :
                    <Nav.Item><Button variant="outline-success" onClick={loginWithRedirect}>Login</Button></Nav.Item>
            }
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
    </>
    )
}

export default NavBar;