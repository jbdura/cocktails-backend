import React from "react";
import {Navbar, Container} from 'react-bootstrap';



const NavBar = () => {

    return (
      <Navbar bg="dark" variant="dark" fixed="top" className="navbar">
        <Container>
          <Navbar.Brand>The Cocktail Companion</Navbar.Brand>
        </Container>
    </Navbar>
    );
};

export default NavBar;