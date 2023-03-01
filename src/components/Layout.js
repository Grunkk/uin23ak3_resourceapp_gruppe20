import React from 'react';
import NavBar from './NavBar';

function Layout(props) {
  return (  
    <div className='container'>
      <header>
          <h1>RESSURSARKIV</h1>
      </header>
      <main>
      <NavBar />
      {props.children}
      </main>
    </div>
  );
}

export default Layout;
