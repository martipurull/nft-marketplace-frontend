import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductSingle from './ProductSingle'


const ProductList = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3001/products')
            if (response.ok) {
                const loadedProducts = await response.json()
                setProducts(loadedProducts)
            } else {
                throw new Error("Failed to fetch!")
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    useEffect(() => fetchProducts(), [])

    return (
        <Row>
            {
                products.map(products => (
                    <Col>
                        <ProductSingle key={products.id} productInfo={products} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default ProductList