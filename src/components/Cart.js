import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../store/cartSlice";
import {Button, Card} from "react-bootstrap";
import React from "react";

const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart)

    const removeProduct = (product) => {
        dispatch(removeFromCart(product))
    }
    const cards = cartProducts.map(product =>

        <div className='col-md-3' style={{marginBottom:'10px'}}>
            <Card key={product.id} className="h-100s" style={{ width: '18rem' }}>
                <div className={'text-center'}>
                    <Card.Img variant="top" src={product.image} style ={{width:'100px', height : '130px'}} />

                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={() => removeProduct(product)} >Remove</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    )
    return (
        <div className="row">
            {cards}
        </div>
    );
}

export default Cart;