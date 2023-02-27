import { Link, Outlet } from "react-router-dom";
import Css from "../pages/Css";
import Html from "../pages/Html";
import Javascript from "../pages/Javascript";
import React from "../pages/React";
import Sanity from "../pages/Sanity";

export default function Layout({handleclick}){
    return(
    <div class="container">
    <header>
        <h1>Ressursarkiv</h1>
    </header>
        <nav>
            <button ><Html/></button>
            <button><Css/></button>
            <button><React/></button>
            <button><Javascript/></button>
            <button><Sanity/></button>
        </nav>
    <main>
         <Outlet/>
    
    </main>
    
    </div> 
    )
}