import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../App.css';

export default function Dashboard(){
    return(
        <div >
            <h1 className="text-center">Dashboard</h1>

            <div className="card p-3 m-5 text-center">
                <p>You have Successfully Logged-In </p>
                <div>
                <button className=""><Link to={'/'}>SignOut</Link></button>

                </div>

                
            </div>
        </div>
    )
}