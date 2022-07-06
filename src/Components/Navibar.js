import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";

const Navibar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Hey guys!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Users</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="me-2">Log in</Button>
                        <Button variant="primary" className="me-2">Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navibar