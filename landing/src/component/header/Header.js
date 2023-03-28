import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './header.scss';


const Header = () => {
    return (
        <Navbar className="navbar" bg="white" expand="lg">
            <Container>
                <Navbar.Brand className='navbar_brand' href="#home">React-lending page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="header_item" href="#home">FEATURES</Nav.Link>
                        <Nav.Link className="header_item" href="#link">ABOUT</Nav.Link>
                        <Nav.Link className="header_item" href="#link">SERVICES</Nav.Link>
                        <Nav.Link className="header_item" href="#link">GALERY</Nav.Link>
                        <Nav.Link className="header_item" href="#link">TESTIMONIALS</Nav.Link>
                        <Nav.Link className="header_item" href="#link">TEAM</Nav.Link>
                        <Nav.Link className="header_item" href="#link">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;