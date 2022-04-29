import React from 'react';

const ReviewOrder = (props) => {
    const product = props.item; 
    return (     
        <div className='m-3 cart'>
            <div className='d-flex container'>
                <div className='productImage'>
                    <img src={product.img} alt="not found"/>
                </div>
                <div>
                    <h1 className='fs-5 m-3'>{product.name}</h1>
                    <h1 className='fs-6 m-3'>By: {product.seller}</h1>
                    <div className='d-flex'>
                        <div className='mx-4'>
                            <h1 className='fs-5'>${product.price}</h1>
                            <h1 className='fs-6'>quantity : {product.quantity} </h1>
                        </div>
                    </div>
                    <button className='btn btn-warning p-3 m-2' onClick={()=>props.removeOrder(product.key)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;