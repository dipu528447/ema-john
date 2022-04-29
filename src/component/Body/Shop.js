
import Cart from '../Body/Cart/Cart';
import Order from '../Body/Order/Order'
import './Shop.css'

const Shop = (props) => {
    const addToCart = props.addToCart;
    const first10 = props.first10;
    const cartAdded = props.cartAdded;
    // console.log(cartAdded);
    return (
        <div>
            <div className = 'd-flex container'>
                <div style = {{"maxWidth":"70%"}} className = "ms-5">
                    {first10.map(item=><Cart product = {item} btnAction = {addToCart} key = {item.key}></Cart>)}
                </div>
                <div style = {{"maxWidth":"30%"}}>
                    <Order cart = {cartAdded} OrderDetails={true} removeProduct={props.removeProduct}></Order>
                </div>
            </div>
        </div>
    );
};

export default Shop;