import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProfiles } from '../api/profiles';
import ProfileCard from './ProfileCard';
import SearchBar from './SearchBar';
import LoadingIndicator from './LoadingIndicator';

const ProfileList = ({ onProfileSelect }) => {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profiles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfiles = async () => {
      const data = await fetchProfiles();

      // Create a Set to track unique profile IDs
      const uniqueProfiles = new Set();

      data.forEach(profile => {
        // Only dispatch if the profile ID is not already in the Set
        if (!uniqueProfiles.has(profile.id)) {
          uniqueProfiles.add(profile.id);
          dispatch({ type: 'ADD_PROFILE', payload: profile });
        }
      });

      setLoading(false);
    };

    loadProfiles();
  }, [dispatch]);

  if (loading) return <LoadingIndicator />;

  return (
    <div>
      <SearchBar />
      <div className="profile-list">
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} onSummaryClick={onProfileSelect} />
        ))}
      </div>
    </div>
  );
};

ProfileList.propTypes = {
  onProfileSelect: PropTypes.func.isRequired, // Validate that onProfileSelect is a required function
};


export default ProfileList;