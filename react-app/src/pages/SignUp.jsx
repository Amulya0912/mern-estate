import React from "react";
import { Link } from "react-router-dom";

export default function SignUp(){
    return(
        <div className="p-3 mx-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
            <form className="flex flex-col items-center gap-4"> 
                <input type="text" placeholder="Username" id="username" className="border p-3 rounded-lg"/>
                <input type="email" placeholder="Email" id="email" className="border p-3 rounded-lg"/>
                <input type="password" placeholder="Password" id="password" className="border p-3 rounded-lg"/>
                <button className="bg-slate-700 border rounded-lg uppercase hover:opacity-90 disabled:opacity-85">Sign up</button>
            </form>
            <div className="flex justify-center gap-2 mt-5">
                <p>Have an account?</p> 
                <Link to="/SignIn">
                <span className="text-blue-700"> Sign in</span>
                </Link>

                
            </div>

        </div>
    );
}