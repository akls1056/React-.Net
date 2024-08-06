import './App.css';
import NavScroll from './layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './components/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <NavScroll />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage bileşenini root path'e ekle */}
          <Route path="/products" element={<Products />} /> {/* Products bileşenini ekle */}
          <Route path="/login" element={<Login />} /> {/* Login bileşenini ekle */}
          <Route path="/register" element={<Register />} /> {/* Register bileşenini ekle */}
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
