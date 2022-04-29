import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import fakeData from './../../fakeData/index';
import ReviewOrder from './ReviewOrder';
import Order from './Order';

const OrderDetails = (props) => {
    const [order,setOrder]= useState([]);
    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart)
        const cartProducts = productKeys.map(item => {
            const product = fakeData.find(pd => pd.key === item);
            product.quantity = saveCart[item];
            return product
        })
        setOrder(cartProducts);
    },[])
    
    const removeOrder = key =>{
        const product = order.filter(item => item.key !== key)
        setOrder(product);
        props.removeProduct(key);
    }
    console.log(order);
    return (
        <div className = 'd-flex container'>
            <div style = {{"maxWidth":"70%"}} className = "ms-5">
                {order.map(item=><ReviewOrder item={item} removeOrder={removeOrder}></ReviewOrder>)}
            </div>
            <div style = {{"maxWidth":"30%"}}>
                <Order cart = {props.cart} orderDetails={false}></Order>
            </div>
        </div>
    );
};

export default OrderDetails;