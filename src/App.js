import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import ResourcePage from './components/ResourcePage';

function App() {
  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/html" element={<ResourcePage category="html" />} />
          <Route path="/css" element={<ResourcePage category="css" />} />
          <Route path="/javascript" element={<ResourcePage category="javascript" />} />
          <Route path="/react" element={<ResourcePage category="react" />} />
          <Route path="/sanity" element={<ResourcePage category="headless-cms" />} />
        </Routes>
      </Layout>
    
  );
}

export default App;


