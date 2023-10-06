import React, { useRef } from 'react'
import { Container, Button, Form, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navigationbar = () => {

    const ref = useRef();
    const navigate = useNavigate()
    
    const goToList = (e) => {
        
        navigate(`/movieList/${ref.current.value}`)
    }

    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container fluid>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img
                            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                            alt="Netflix..."
                            width={100}
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link to="/" className="nav-item">
                            Home
                        </Link>
                        <Link to="/movies" className="nav-item">
                            Movies
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" ref={ref}/>
                        <Button variant="outline-danger" onClick={goToList}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar
