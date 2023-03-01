import React from 'react';
import NavBar from './NavBar';

function Layout(props) {
  return (  
    <div className='container'>
      <header>
          <h1>RESSURSARKIV</h1>
      </header>
      <main>
      <nav>
        <NavBar />
      </nav>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
