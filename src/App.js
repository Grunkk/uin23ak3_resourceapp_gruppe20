import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'
import ResourcePage from './components/ResourcePage';

function App() {
  return (
  
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Main />} />
        <Route path=':slug' element={<ResourcePage recipes={recipes}  />}/>
      </Route>
    </Routes>  

      );
}

export default App;
