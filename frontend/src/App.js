import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavScroll from './layout/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './components/AdminPanel';  // AdminPanel bileşeni ekleniyor
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Profile from './pages/Profile';
import Logout from './pages/Logout';


function App() {
    const userRole = localStorage.getItem('role');  // Kullanıcının rolünü alın

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <NavScroll />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/register" element={<Register />} />
                        {userRole === 'Admin' && <Route path="/admin" element={<AdminPanel />} />}
                        <Route path="*" element={<HomePage />} />
                        <Route path="/addproduct" element={<AddProduct />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
