import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NoAuth = () =>{

    const { loginWithRedirect} = useAuth0();

    return(
        <>
        <h2>You need to be authenticated to access this part of the system :)</h2>
        <Nav.Item><Button variant="outline-success" onClick={loginWithRedirect}>Login</Button></Nav.Item>
        </>
    )
}

export default NoAuth;