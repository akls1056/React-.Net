import './App.css';
import NavScroll from './layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavScroll />
          <Routes>
            <Route path="/" element={<HomePage />} />  {/* HomePage'i root path'e ekle */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register" element={<Register />} />
          
          </Routes>
        </Router>
      </header>
    </div>

    
    
  );
}

export default App;
