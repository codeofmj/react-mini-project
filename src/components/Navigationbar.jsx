import React from 'react'
import { Container, Button, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigationbar = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                        alt="Netflix image..."
                        width={100}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link to="/" className='nav-item'>Home</Link>
                        <Link to="/movies" className='nav-item'>Movies</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar
