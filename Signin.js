import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import "../App.css";



export default function Signin(){
    return(
        <div className='container text-center'>
            <div className='row'>
                <form className="justify-content-center">
                   <h1>SIGNIN PAGE</h1>
                    

                    <label>Email :</label>
                    <input type="email" name='email' placeholder='Enter the email'/><br/>

                    <label>Password :</label>
                    <input type="password" name='password' placeholder='Enter the password'/><br/>  

                    <div className="m-4">
                      <button className=''><Link to={'/dashboard'}>SIGNIN</Link></button>
                      <button className=''><Link to={'/signup'}>SIGNUP</Link></button>
                    </div>


                    

                </form>

            </div>
        </div>
    )
}