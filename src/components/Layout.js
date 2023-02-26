import React from "react";
import Navbar from "./NavBar.js";
import resources from '../ressurser/ressurser.js';
import ResourcePage from "./ResourcePage.js";

function MyComponent() {
  const resourceList = Array.isArray(resources) ? resources : [];

  return (
    <div>
      <Navbar />
      <h1>Ressurser</h1>
      <ul>
        {resourceList.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a> ({resource.category})
          </li>
        ))}
      </ul>
      <ResourcePage resources={resourceList} />
    </div>
  );
}

export default MyComponent;
