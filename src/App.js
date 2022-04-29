import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/header/NavBar';
import Shop from './component/Body/Shop';
import fakeData from './component/fakeData';
import OrderDetails from './component/Body/Order/OrderDetails';
import ManageOrder from './component/Body/ManageOrder'
import {Route,Routes} from 'react-router-dom';
import ProductDetails from './component/Body/ProductDetails';
import { addToDatabaseCart, removeFromDatabaseCart } from './utilities/databaseManager';

function App() {
  const first10 = fakeData.slice(0,10);
    const [cartAdded,setcartAdded] = useState([])
    const addToCart = product=>{
        // console.log(product);        
        const newCart = [...cartAdded,product];
        setcartAdded(newCart);
        const sameProduct = cartAdded.filter(pd=>pd.key===product.key);
        addToDatabaseCart(product.key,sameProduct.length+1)
    }
    const removeProduct = key => {
      removeFromDatabaseCart(key);
      const newCart = cartAdded.filter(item=> item.key !== key);
      setcartAdded(newCart);
  }
  return (
    <div className="App">
        <header>
            <NavBar items={cartAdded}></NavBar>
        </header>
        <main>
            
            <Routes>
                <Route path="/shop" element={<Shop first10={first10} removeProduct={removeProduct} addToCart={addToCart} cartAdded={cartAdded}></Shop>} />
                <Route path="/orderDetails" element={<OrderDetails cart={cartAdded} removeProduct={removeProduct}/>}/>
                <Route path="/manageOrder" element={<ManageOrder/>}/>
                <Route path={`/product/:productKey`} element={<ProductDetails/>}/>
                <Route exact path="/" element={<Shop first10={first10} addToCart={addToCart} cartAdded={cartAdded}></Shop>}/>
                
            </Routes>
        </main>
    </div>
  );
}

export default App;
