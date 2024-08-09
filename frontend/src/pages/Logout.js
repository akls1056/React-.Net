import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage'daki tüm kullanıcı bilgilerini temizle
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');

    // Kullanıcıyı giriş sayfasına yönlendir
    navigate('/login');
  }, [navigate]);

  return null; // Görsel olarak bir şey göstermiyoruz, sadece yönlendiriyoruz
};

export default Logout;
