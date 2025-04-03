import { ADD_PROFILE, DELETE_PROFILE, EDIT_PROFILE } from './actions';

const initialState = {
  profiles: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE: {
      // Create a block scope for the case
      const exists = state.profiles.some(profile => profile.id === action.payload.id);
      if (exists) {
        return state; // Return the current state if the profile already exists
      }
      return { ...state, profiles: [...state.profiles, action.payload] };
    }

    case DELETE_PROFILE:
      return { ...state, profiles: state.profiles.filter(profile => profile.id !== action.payload) };

    case EDIT_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map(profile => 
          profile.id === action.payload.id ? action.payload : profile
        ),
      };

    default:
      return state;
  }
};

export default profileReducer;