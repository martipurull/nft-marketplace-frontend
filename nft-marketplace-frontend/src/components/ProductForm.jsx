import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/esm/Container'
import { Upload } from 'react-bootstrap-icons'

const ProductForm = () => {
    const [productToEdit, setProductToEdit] = useState({
        name: "",
        artist: "",
        email: "",
        description: "",
        category: "",
        price: "",
        imageUrl: ""
    })

    return (
        <Container className="mx-5 my-5">
            <Form>
                <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="enter product name" />
                </Form.Group>
                <Form.Group controlId="artistName">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="enter artist name" />
                </Form.Group>
                <Form.Group controlId="artistEmail">
                    <Form.Label>Artist Email</Form.Label>
                    <Form.Control type="email" placeholder="enter artist email" />
                </Form.Group>
                <Form.Group controlId="productDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group controlId="categorySelect">
                    <Form.Label>Select product's category</Form.Label>
                    <Form.Control as="select">
                        <option>digital art</option>
                        <option>crypto world</option>
                        <option>memes</option>
                        <option>other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="artistName">
                    <Form.Label htmlFor="productPrice">
                        Price
                </Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="productPrice" placeholder="1000" />
                    </InputGroup>
                </Form.Group>
                <Button variant="secondary" className="d-block my-3">
                    upload product image <Upload size={28} className="mx-3" />
                </Button>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </Container>
    )
}

export default ProductForm