import './App.css';
import Layout from './components/Layout';
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
  
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Main />} />
        <Route />
      </Route>
    </Routes>  

      );
}

export default App;