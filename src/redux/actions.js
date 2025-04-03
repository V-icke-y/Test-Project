export const ADD_PROFILE = 'ADD_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';
export const EDIT_PROFILE = 'EDIT_PROFILE';

export const addProfile = (profile) => ({
  type: ADD_PROFILE,
  payload: profile,
});

export const deleteProfile = (id) => ({
  type: DELETE_PROFILE,
  payload: id,
});

export const editProfile = (profile) => ({
  type: EDIT_PROFILE,
  payload: profile,
});

// src/redux/actions.js
export const filterProfiles = (criteria) => {
  return {
      type: 'FILTER_PROFILES',
      payload: criteria,
  };
};