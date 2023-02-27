import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='main'>
      <ul className='navbar'>
        <Link to="/html"><li>HTML</li></Link>
        <Link to="/css"><li>CSS</li></Link>
        <Link to="/javascript"><li>JavaScript</li></Link>
        <Link to="/react"><li>React</li></Link>
        <Link to="/sanity"><li>Sanity</li></Link>
      </ul>
    </div>
  );
}

export default NavBar;
