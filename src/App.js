import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Home from './Components/Home';

import ProductsForm from './Components/ProductsForm'
import Detail from './Components/Detail';

// import ProductsForm from './Components/ProductsForm';
// import Detail from './Components/Detail';

// >>>>>>> 623078df2ba859f6774ae957bdc279ca6f6373d5


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/createProduct' element={<ProductsForm />} />
        <Route path='/foods/:id' element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
