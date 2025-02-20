import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/">
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                  <span className="text-slate-700">Amulya</span>
                  <span className="text-slate-500">Estate</span>
                </h1>
                </Link>

                <form className="bg-slate-100 rounded-lg flex items-center">
                    <input type="text" placeholder="Search.."  className="bg-transparent p-3 focus:outline-none w-24 sm:w-64"/>
                    <FaSearch className="text-slate-500"/>
                </form>
                <ul className="flex gap-4">
                    <Link to="/">
                    <li className="hidden text-slate-600 sm:inline hover:underline">Home</li>
                    </Link>
                    <Link to="/about">
                    <li className="hidden text-slate-600 sm:inline hover:underline">About</li>
                    </Link>
                    <Link to="/sign-in">
                    <li className=" text-slate-600 sm:inline hover:underline">Sign in</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
}