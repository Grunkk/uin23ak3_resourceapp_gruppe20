import React from 'react';
import { resources } from '../ressurser/ressurser.js';

function ResourcePage(props) {
  const category = props.category;
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <div className='resourceBody'>
      <h1>Resources for {category}</h1>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default ResourcePage;
