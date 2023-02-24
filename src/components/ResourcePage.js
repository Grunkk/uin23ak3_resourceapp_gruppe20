import { useParams } from "react-router-dom"

export default function ResourcePage({resources}){
    const {slug} = useParams()
    const resource = resources.find((res) => res?.resources.category.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(resource)

    return(

        <section>
            <h2>{resource?.resources?.category}</h2>

            <ul>{resource?.resources?.title.map((ressurser) => (
                <a href={resource?.resources?.url}><li>{ressurser}</li></a>
                //<a href={resource?.resources?.url}><li>{resource?.resources?.title}</li></a>
            ))}</ul>
        </section>
    )
}