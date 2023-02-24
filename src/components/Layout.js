import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
    <div class="container">
    <header>
        <h1>Ressursarkiv</h1>
    </header>
    <Outlet>
    <main>
        
        <nav>

        </nav>
        <div>
            
        </div>
    </main>
    </Outlet>
    </div> 
    )
}