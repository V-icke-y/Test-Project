import { createStore } from 'redux';
import profileReducer from './reducers';

const store = createStore(profileReducer);

export default store;