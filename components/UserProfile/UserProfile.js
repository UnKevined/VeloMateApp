import React from 'react';
import './UserProfile.css'; // Importiere das Styling

function UserProfile(props) {
  const { username, fullName, bio, avatarUrl } = props;

  return (
    <div className="user-profile">
      <img src={avatarUrl} alt={`${username}'s Avatar`} className="avatar" />
      <h2>{fullName}</h2>
      <p>{username}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfile;
