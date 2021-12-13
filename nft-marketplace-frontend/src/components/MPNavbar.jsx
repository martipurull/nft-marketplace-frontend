import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './component-styles.css'


const MPNavbar = () => {

    return (
        <Navbar bg="dark sticky-top" variant="dark">
            <Container>
                <Link to="/" >
                    <Navbar.Brand className="pseudo-logo">NFT Markt</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Link to="/backoffice">
                        <span className="nav-link">BackOffice</span>
                    </Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="search products..." className="mr-sm-2" />
                </Form>
            </Container>
        </Navbar>
    )
}

export default MPNavbar