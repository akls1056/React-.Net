import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminPanel() {
    const [users, setUsers] = useState([]);  // Kullanıcı listesini saklamak için state
    const navigate = useNavigate();

    useEffect(() => {
        // Kullanıcının admin olup olmadığını kontrol et
        const userRole = localStorage.getItem('role');
        if (userRole !== 'Admin') {
            // Eğer kullanıcı admin değilse giriş sayfasına yönlendir
            navigate('/login');
        } else {
            // Eğer admin ise tüm kullanıcıları getirmek için API'yi çağır
            axios.get('/api/auth/admin/users', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            })
            .then(response => {
                setUsers(response.data);  // API'den gelen kullanıcı verisini state'e sakla
            })
            .catch(error => {
                console.error('Kullanıcılar alınırken bir hata oluştu:', error);
            });
        }
    }, [navigate]);

    return (
        <div>
            <h2>Admin Paneli</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.email} - {user.role}</li>
                ))}
            </ul>
        </div>
    );
}

export default AdminPanel;
