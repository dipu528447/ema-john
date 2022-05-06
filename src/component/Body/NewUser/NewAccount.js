import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const NewAccount = () => {
    function signin(){
        const auth = getAuth();
        const email = document.getElementById("staticEmail2").value;
        const password = document.getElementById("inputPassword2").value;
        console.log(document.getElementById("inputPassword2 ").value)
        if(isValid(email,password)){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
        }
    }
    
    const ValidateEmail = mail => {
        console.log(mail)
        // eslint-disable-next-line no-useless-escape
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
                            <h5 className="card-title">New Account</h5>
                            <form>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label">Name :</label>
                                    <div className="col-sm-8">
                                        <input type="text" required className="form-control" id="staticName"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label">Age :</label>
                                    <div className="col-sm-8">
                                        <input type="number" required className="form-control" id="staticAge"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-4 col-form-label">Email :</label>
                                    <div className="col-sm-8">
                                        <input type="email" required className="form-control" id="staticEmail2"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-4 col-form-label">Password :</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" id="inputPassword2" required/>
                                    </div>
                                </div>
                                <div className="mb-3 row d-flex justify-content-center">
                                    <div className="col-sm-5">
                                        <Link to="/login"><button type="submit" onClick={signin} id="btn-submit" className='btn btn-primary'>Sign Up</button></Link>
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

export default NewAccount;