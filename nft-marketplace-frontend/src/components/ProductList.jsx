import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import importedData from '../data/products.json'
import ProductSingle from './ProductSingle'


const ProductList = () => {
    const [fakeData, setFakeData] = useState([])

    useEffect(() => {
        setFakeData(importedData)
    }, [])

    return (
        <Row>
            {
                fakeData.map(fakeProduct => (
                    <Col>
                        <ProductSingle key={fakeProduct.id} productInfo={fakeProduct} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default ProductList