import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
const Cart = (props) => {
    let product=props.product;
    
    return (
        <div className='m-3 cart'>
            <div className='d-flex container'>
                <div className='productImage'>
                    <img src={product.img} alt="not found"/>
                </div>
                <div>
                    {!props.showAddcartbutton && <Link style={{"textDecoration":"none"}}to={`/product/${product.key}`} ><h1 className='fs-5 m-3'>{product.name}</h1></Link>}
                    {!props.showAddcartbutton || <h1 className='fs-5 m-3'>{product.name}</h1>}
                    <h1 className='fs-6 m-3'>By: {product.seller}</h1>
                    <div className='d-flex'>
                        <div className='mx-4'>
                            <h1 className='fs-5'>${product.price}</h1>
                            <h1 className='fs-6'>only {product.stock} left in stock</h1>
                        </div>
                        <div className='mx-3'>
                            <p>Rating</p>
                            <p>Features</p>
                            <ul>
                                {product.features.map(item=> <li>{item.description} : {item.value} </li>)}
                            </ul>
                        </div>
                    </div>
                    {!props.showAddcartbutton && <button className='btn btn-warning m-3' onClick={()=>props.btnAction(product)}><strong>Add to Cart</strong></button>}
                </div>
            </div>
        </div>
    );
};

export default Cart;