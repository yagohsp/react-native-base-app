/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loaderEnabled: false
  },
  reducers: {
    setLoaderAction: (state, { payload }) => {
      state.loaderEnabled = payload;
    }
  }
});

export const { setLoaderAction } = loaderSlice.actions;

export default loaderSlice.reducer;
