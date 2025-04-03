import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProfileList from './components/ProfileList';
import ProfileMap from './components/ProfileMap'; 
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import './styles.css';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Profile Map Application</h1>
        <AdminPanel />
        <ProfileList onProfileSelect={handleProfileSelect} />
        <ProfileMap selectedProfile={selectedProfile} /> 
        <ProfileDetails profile={selectedProfile} />
      </div>
    </Provider>
  );
};

export default App;