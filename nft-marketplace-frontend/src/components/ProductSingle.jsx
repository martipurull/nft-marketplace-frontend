import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'


const ProductSingle = ({ productInfo }) => {


    return (
        <Card className="h-100 product-card">
            <Card.Img className="product-img" variant="top" src={productInfo.imageUrl} />
            <Card.Body>
                <Card.Title>{productInfo.name}</Card.Title>
                <p>by {productInfo.artist}</p>
                <Card.Text>
                    {productInfo.description}
                </Card.Text>
            </Card.Body>
            <div className="d-flex justify-content-between align-items-end mb-3 mx-4">
                <Badge variant="success">from ${productInfo.price}</Badge>
                <Button variant="primary">details</Button>
            </div>
        </Card>
    )
}

export default ProductSingle