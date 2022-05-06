import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword ,signInWithPopup,FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth";
import {useContext} from 'react';
import {userContext} from '../../../App'

const Login = () => {
    const [user,setUser] = useContext(userContext)
    function loginWithFb(){
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then(setUser({isSigned: true}))
        .then(userCredential=>localStorage.setItem("LoggedUser",JSON.stringify({email: userCredential.user.email,name:userCredential.user.displayName})))
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    function loginwithGmail(){
        //event.preventDefault();
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(setUser({isSigned: true}))
        .then(userCredential=>localStorage.setItem("LoggedUser",JSON.stringify({email: userCredential.user.email,name:userCredential.user.displayName})))
        .catch((error) => {            
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    function loginWithEmail(){
        const auth = getAuth();
        const email = document.getElementById("staticEmail").value;
        const password = document.getElementById("inputPassword").value;
        if(isValid(email,password)){
            signInWithEmailAndPassword(auth, email, password)
            .then(setUser({isSigned:true}))
            .then(userCredential=>localStorage.setItem("LoggedUser",JSON.stringify({email: userCredential.user.email,name:userCredential.user.displayName})))
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
        }
        
    }
    
    const ValidateEmail = mail => {
        
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
        
    }
    
    const ValidatePassword = password => {
        
        if (/^(?=.*[0-9])(?=.*[!@#$%^&?}{)(*])[a-zA-Z0-9!@#$%^&?}{)(*]{6,16}$/.test(password))
        {
            return (true)
        }        
        alert("You have entered an invalid password!")
        return (false)

    }
    const isValid = (email,password) => {

        if(ValidateEmail(email) &&  ValidatePassword(password)) {
            return true
        }
        return false;
    }

    
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <h5 className="card-title">Login</h5>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label">Email :</label>
                                    <div className="col-sm-8">
                                        <input type="email" className="form-control" id="staticEmail" required/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label">Password :</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" id="inputPassword" required/>
                                    </div>
                                </div>
                                
                                <div className="mb-3 row d-flex justify-content-center">
                                    <div className="col-sm-4">
                                       <Link to="/dashboard"> <input className='form-submit' type="button" value="Login" onClick={loginWithEmail}/></Link>
                                    </div>
                                    <div className="col-sm-4">
                                        <Link className='form-link' to="/NewAccount">
                                            <input className='form-submit' type="button" value="New Account" />
                                        </Link>
                                    </div>                                    
                                </div>
                                <div className="mb-3 row d-flex justify-content-center">
                                    <div className="col-sm-4">
                                       <Link to="/dashboard"> <i className='form-submit material-icons' type="button" onClick={loginWithFb}>facebook</i></Link>
                                    </div>
                                    <div className="col-sm-4">
                                        <Link to="/dashboard"> <i className='form-submit material-icons' style={{"color":"red" }} type="button" onClick={loginwithGmail}>mail</i></Link>
                                    </div>                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    );
};

export default Login;