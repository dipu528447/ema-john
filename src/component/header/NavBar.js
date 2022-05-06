import React,{useContext} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { userContext } from './../../App';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
const NavBar = (props) => {
    const items = props.items;
    const [user,setUser]= useContext(userContext)
    const navigate= useNavigate();
    
    function logout(){
        const auth = getAuth();
        signOut(auth).then(setUser({isSigned:false}))
        .catch((error) => {
        // An error happened.
        console.log(error)
        });

        localStorage.setItem("LoggedUser",JSON.stringify({email: '',name:''}))
        navigate("/")
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <img className="img-fluid" style={{"width":"30vw"}} src="images/logo.png" alt="not found"></img>
            </div>
            <div className='container-fluid bg-dark'>
                <ul className='d-flex justify-content-evenly p-2' id="navItems">
                    <Link style={{"textDecoration":"none"}} to={"/shop"} className='text-warning fs-4'>Shop</Link>
                    <Link style={{"textDecoration":"none"}} to={"/orderDetails"} className='text-warning fs-4'>Order Review</Link>
                    <Link style={{"textDecoration":"none"}} to={"/manageOrder"} className='text-warning fs-4'>Manage Inventory Here</Link>
                    {user.isSigned && <button onClick={logout} className='btn btn-info'>SignOut</button>}
                </ul>
            </div>
            <div className='container-fluid bg-info'>
                <div className="form-group row">
                    <div className="col-sm-10 my-3">
                        <input type="text" className="form-control" id="inputPassword" placeholder="Search"></input>
                    </div>
                    <div className='col-sm-1 my-3'>
                        <button className='btn btn-dark rounded'>Search</button>
                    </div>
                    <div className='col-sm-1 my-3'>
                        <p className='fs-5'>Items : {items.length}</p>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default NavBar;