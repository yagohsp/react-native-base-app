/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUserAction: (state, { payload }) => {
      return payload;
    },
    clearUserAction: () => {
      return {};
    }
  }
});

export const { setUserAction, clearUserAction } = userSlice.actions;

export default userSlice.reducer;
