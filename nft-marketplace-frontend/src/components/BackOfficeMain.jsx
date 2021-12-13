import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './component-styles.css'
import ProductList from './ProductList'


const BackOfficeMain = () => {

    return (
        <>
            <Jumbotron id="main-jumbo" fluid>
                <Container>
                    <h1><span className="jumbo-brand">NFT Markt</span> backoffice</h1>
                </Container>
            </Jumbotron>
            <Container>
                <ProductList backoffice={true} />
            </Container>
        </>
    )
}

export default BackOfficeMain