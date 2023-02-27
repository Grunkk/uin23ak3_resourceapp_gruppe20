import logo from './logo.svg';
import './App.css';
import './css/main.css'
import Layout from './components/Layout';
import Main from './components/Main'

import {Route, Routes} from 'react-router-dom'
import ResourcePage from './components/ResourcePage';
import { useState } from 'react';

function App() {
  const [resources] = useState([])
  return (
  
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Main resources={resources} />} />
        <Route path=':slug' element={<ResourcePage resources={resources}/>}/>
      </Route>
    </Routes>  

      );
}

export default App;
