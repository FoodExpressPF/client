import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
// import Home from './component/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/home' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
