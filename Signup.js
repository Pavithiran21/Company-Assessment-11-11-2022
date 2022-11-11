import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


export default function Signup(){
    return(
        <div className='container text-center'>
            <div className='row'>
                <form>

                    <h1>SIGNUP PAGE</h1>
                    <label>Firstname :</label>
                    <input type="text" name='Firstname' placeholder='Enter the firstname'/><br/>
                    <label>Lastname :</label>
                    <input type="text" name='Lastname' placeholder='Enter the lastname'/><br/>

                    <label>Email :</label>
                    <input type="email" name='email' placeholder='Enter the email'/><br/>

                    <label>Password :</label>
                    <input type="password" name='password' placeholder='Enter the password'/><br/>
                    <div className='m-3'>

                        
                    <button><Link to='/'>SIGN-IN</Link></button>
                    
                    </div>  


                </form>

            </div>
        </div>
    )

}