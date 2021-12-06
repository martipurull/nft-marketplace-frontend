import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import './component-styles.css'


const MPNavbar = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="pseudo-logo" href="#home">NFT Markt</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#back-office">BackOffice</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="search products..." className="mr-sm-2" />
                </Form>
            </Container>
        </Navbar>
    )
}

export default MPNavbar