import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Provider from './contexts/PizzaContext';
import Home from './views/Home';
import Cart from './views/Cart';
import Single from './views/Single';
import NotFound from './views/NotFound';

function App() {
  
  return (
    <>
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pizza/:id" element={<Single />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </> 
  )
}

export default App
