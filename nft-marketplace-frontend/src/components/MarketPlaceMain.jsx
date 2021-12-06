import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './component-styles.css'
import ProductList from './ProductList'


const MarketPlaceMain = () => {

    return (
        <>
            <Jumbotron id="main-jumbo" fluid>
                <Container>
                    <h1>Welcome to <span className="jumbo-brand">NFT Markt</span></h1>
                    <p>
                        Browse today the NFTs that will make you rich tomorrow.
                </p>
                </Container>
            </Jumbotron>
            <Container>
                <ProductList />
            </Container>
        </>
    )
}

export default MarketPlaceMain