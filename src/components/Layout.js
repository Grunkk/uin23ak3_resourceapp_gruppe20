import React from 'react';
import NavBar from './NavBar';

function Layout(props) {
  return (  
    <div className='container'>
      <header>
          <h1>RESSURSARKIV</h1>
      </header>
      <NavBar />
      {props.children}
    </div>
  );
}

export default Layout;
