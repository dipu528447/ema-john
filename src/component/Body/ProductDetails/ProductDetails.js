import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import Cart from '../Cart/Cart';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product=fakeData.find(pd=>pd.key===productKey);
    
    return (    
        <div className = 'd-flex container'>
            <Cart product={product} showAddcartbutton={true}></Cart>
        </div>
    );
};

export default ProductDetails;