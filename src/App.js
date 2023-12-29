import {Route, Routes} from 'react-router-dom';
import './App.css';

import Products from './pages/products/products';
import { Home } from './home/home';
import { Nav } from './Components/Nav';


function App() {
 return (
  <div>
   <Nav />
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Products/>}/>
  </Routes>
  </div>
 );
  };

  

export default App;