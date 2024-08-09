import React from 'react';

const Profile = () => {
  // localStorage'dan kullanıcı bilgilerini alıyoruz
  const email = localStorage.getItem('email');
  const role = localStorage.getItem('role');

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default Profile;
