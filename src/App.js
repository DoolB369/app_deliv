import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/home'
import Cart from './pages/cart'
import Order from './pages/order'
import Success from './pages/successfully'
import Track from './pages/track'
import Pix from './pages/pix'

// import logo from './logo.svg';
function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart/:id" element={ <Cart /> } />
        <Route path="/order/:id" element={ <Order /> } />
        <Route path="/Success" element={ <Success /> } />
        <Route path="/track" element={ <Track /> } />
        <Route path="/pix" element={ <Pix /> } />
    </Routes>
  );
}

export default App;
