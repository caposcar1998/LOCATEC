import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap'
  import '../App.css'

const Header = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <Navbar>
        <NavbarBrand href="/" className='me-2'>
          <img 
            alt="logoi"
            src="/logotec.png"
            className='logoi'
            style={{
              height: 40,
              width: 40,
            }}
          />
          LOCATEC
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">LogIn</NavLink>
          </NavItem>
          <NavItem>
            <Link to="/catalogo">Catalogo</Link>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
    );
}

export default Header;