import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import ProductRegister from '../pages/ProductRegister';
import '../assets/styles/App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/product' element={<ProductRegister/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App
