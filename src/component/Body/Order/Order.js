import React from 'react';
import './Order.css';
import { Link } from 'react-router-dom';
const Order = (props) => {
    let cart = props.cart;
    let price = 0;
    let shipping = 0;
    
    cart.map(item=> {
        return {
            price:price+=parseFloat(item.price),
            shipping:shipping+=parseFloat(item.shipping)
        }    
    })
    return (
        <div className='order m-2'>
            <p style={{"textAlign":"center"}}className='fs-5 mx-3'>Order Summary</p>
            <p style={{"textAlign":"center"}}>Items Ordered : {cart.length}</p>
            <div className='d-flex justify-content-between'>
                <div>
                    <p>Items Price :</p>
                    <p>Items Shipping : </p>
                    <p>Total Price Before Tax : </p>
                    <p>Tax : </p>
                    <p>Final Price :</p>
                </div>
                <div>
                    <p>{Number(price).toFixed(2)}</p>
                    <p>{Number(shipping).toFixed(2)}</p>
                    <p>{Number(price+shipping).toFixed(2)}</p>
                    <p>{Number(Math.floor(price+shipping)/10).toFixed(2)}</p>
                    <p>{Number(price+shipping+Math.floor(price+shipping)/10).toFixed(2)}</p>
                </div>
            </div>
            {props.OrderDetails && <Link to={"/orderDetails"}><button className='btn btn-warning mx-5'>Review Order</button></Link>}
            {!props.OrderDetails && <button className='btn btn-danger'>Place Order</button>}
        </div>
    );
};

export default Order;