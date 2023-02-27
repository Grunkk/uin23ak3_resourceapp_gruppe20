import { useParams } from "react-router-dom";

export default function ResourcePage({ ressurser }) {
  const { slug } = useParams();
  const resource = Array.isArray(ressurser)
    ? ressurser.find(
        (res) =>
          res?.x?.x.replace(/\s/g, "-").toLowerCase() === slug.toLowerCase()
      )
    : null;
  console.log(resource);

  return (
    <ul>
      {resource?.resources?.title.map((title, index) => (
        <li key={index}>
          <a href={resource?.resources?.url[index]}>{title}</a>
        </li>
      ))}
    </ul>
  );
}
