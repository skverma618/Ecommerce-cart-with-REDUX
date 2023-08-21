import React, {useState, useEffect} from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../store/cartSlice";
import {getProducts} from "../store/productSlice";
const Product = () => {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const {data: products} = useSelector(state => state.products) // alias is used here
    useEffect(() => {
        dispatch(getProducts())

        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then((res) => {
        //         setProducts([...res]);
        //     })
    }, []);
    // console.log(products.data)
    const addProduct = (product) => {
        dispatch(addToCart(product))
    }

    const cards = products.map(product =>

        <div className='col-md-3' style={{marginBottom: '10px'}}>
            <Card key={product.id} className="h-100s" style={{width: '18rem'}}>
                <div className={'text-center'}>
                    <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}}/>

                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={() => addProduct(product)}>Add To Cart</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    )
    return (
        <div className="row">
            {cards}
        </div>
    )
}

export default Product