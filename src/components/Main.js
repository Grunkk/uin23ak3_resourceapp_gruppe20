import { Link } from "react-router-dom";
import ResourcePage from "./ResourcePage";


export default function Main({resources}){
    return(
        <>
        <section>
            <h2>test</h2>
                {resources.map((res, index) => (
                    <Link key={index} to={res?.resources.category.replace(/\s/g, "-").toLowerCase()}>
                        <ResourcePage />
                    </Link>
                ))}
        </section>
        </>
    )
}