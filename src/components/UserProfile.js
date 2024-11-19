// src/components/UserProfile.js
import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://via.placeholder.com/100',
  });

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, profilePicture: imageUrl });
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
      <input type="file" accept="image/*" onChange={handleProfilePictureChange} className="file-input" />
      <div className="profile-info">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
