import React, { useState,createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/header/NavBar';
import Shop from './component/Body/Shop/Shop';
import fakeData from './component/fakeData';
import OrderDetails from './component/Body/Order/OrderDetails';
import ManageOrder from './component/Body/ManageOrder/ManageOrder'
import {Route,Routes} from 'react-router-dom';
import ProductDetails from './component/Body/ProductDetails/ProductDetails';
import { addToDatabaseCart, removeFromDatabaseCart } from './utilities/databaseManager';
import Login from './component/Body/Login/Login';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.Config';
import NewAccount from './component/Body/NewUser/NewAccount';
import PrivateRoute from './component/Body/RequiredAuth/PrivateRoute';
import Dashboard from './component/Body/Dashboard/Dashboard';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState([])
  initializeApp(firebaseConfig);

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
        
        <main>
          <userContext.Provider value={[user,setUser]}>
            <header>
              <NavBar items={cartAdded}></NavBar>
            </header>
            <Routes>
                <Route path="/shop" element={<Shop first10={first10} removeProduct={removeProduct} addToCart={addToCart} cartAdded={cartAdded}></Shop>} />
                <Route path="/orderDetails" element={<OrderDetails cart={cartAdded} removeProduct={removeProduct}/>}/>
                <Route path="/manageOrder" element={<ManageOrder/>}/>
                <Route path={`/product/:productKey`} element={<ProductDetails/>}/>
                <Route exact path="/" element={<Shop first10={first10} addToCart={addToCart} cartAdded={cartAdded}></Shop>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/NewAccount" element={<NewAccount/>} />
                <Route path="/dashboard" element={
                <PrivateRoute><Dashboard></Dashboard></PrivateRoute>}/>
            </Routes>
          </userContext.Provider>
        </main>
    </div>
  );
}

export default App;
