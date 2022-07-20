import React from "react";
import logo from "../../assets/PaletteLogo.jpg";
import { Nav, Navbar } from "react-bootstrap";

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img src={logo} className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#photos">Photos</Nav.Link>
          <Nav.Link href="#favorites">Favorites</Nav.Link>
          <Nav.Link href="#notes">Notes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
