import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './user/reducer';

const reducers = combineReducers({
  user: userReducer
});

export default configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    })
});
