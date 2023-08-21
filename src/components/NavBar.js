import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux/es/hooks/useSelector";

const NavBar = () => {
    const cartProducts = useSelector(state => state.cart);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand to="/" as={Link}>Brand</Navbar.Brand>

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to='/product' as={Link}>Product</Nav.Link>
                        <Nav.Link to={'/cart'} as={Link}>Cart</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                <Navbar.Toggle/>
                <Navbar.Collapse id="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link to={'/cart'} as={Link}>My Bag {cartProducts.length}</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;