import React from "react";

export default function Main({ resources }) {
  return (
    <div>
      <h2>Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>{resource.title}</a> ({resource.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
