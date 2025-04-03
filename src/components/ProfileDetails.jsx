import React from 'react';

const ProfileDetails = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p>Latitude: {profile.lat}</p>
      <p>Longitude: {profile.lng}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProfileDetails;