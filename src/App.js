import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Home from './Components/Home';
import Detail from './Components/Detail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/foods/:id' element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
