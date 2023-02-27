import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout(){
    return(
    <div class="container">
    <header>
        <h1>Ressursarkiv</h1>
    </header>
    <Outlet>
    <main>
        
        <nav>
            <NavBar />
        </nav>
        <div>
            
        </div>
    </main>
    </Outlet>
    </div> 
    )
}