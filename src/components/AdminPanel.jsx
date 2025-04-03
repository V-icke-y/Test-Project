import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProfile } from '../redux/actions';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', lat: '', lng: '' });

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProfile({ ...newProfile, id: Date.now() }));
    setNewProfile({ name: '', photo: '', description: '', lat: '', lng: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={newProfile.name} onChange={handleChange} required />
      <input type="text" name="photo" placeholder="Photo URL" value={newProfile.photo} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={newProfile.description} onChange={handleChange} required />
      <input type="number" name="lat" placeholder="Latitude" value={newProfile.lat} onChange={handleChange} required />
      <input type="number" name="lng" placeholder="Longitude" value={newProfile.lng} onChange={handleChange} required />
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default AdminPanel;