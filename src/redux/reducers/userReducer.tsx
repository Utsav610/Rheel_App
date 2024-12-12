import {createSlice} from '@reduxjs/toolkit';
import { removeAllData } from '../../components/AsyncManager';
import {RootState} from '../store/store';

const initialState = {
  user_data: null,
  city_data: null
};

const userReducer = createSlice({
  name: 'userRedux',
  initialState,
  reducers: {
    storeUserData: (state: RootState, {payload}) => {
      state.user_data = payload;
    },
    storeSearchCity: (state: RootState, {payload}) => {
      state.city_data = payload
    },
    clearAllState: () => {
      removeAllData();
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {storeUserData,storeSearchCity,clearAllState } = userReducer.actions;
// export const registerInfo=(state)=>state.userRedux.register_info
export const user_data = (state: any) => state.userRedux.user_data;
export const city_data = (state: any) => state.userRedux.city_data;
export default userReducer.reducer;
