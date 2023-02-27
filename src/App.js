
import './App.css';
import './css/main.css'
import Layout from './components/Layout';
import {Route, Routes} from 'react-router-dom'
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';
import React from './pages/React';
import Sanity from './pages/Sanity';
import Main from './components/Main';


function App() {

  return (
  
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Main />}/>
        <Route path='html' element={<Html />}/>
        <Route path='css' element={<Css />}/>
        <Route path='javascript' element={<Javascript />}/>
        <Route path='react' element={<React />}/>
        <Route path='sanity' element={<Sanity />}/>
      </Route>
    </Routes>  

      );

}

export default App;
