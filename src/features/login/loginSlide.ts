import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ILogin, UserInfoUpdate } from 'interfaces';
import { UserInfo } from 'interfaces';
import { ROLE, USER_EXPERIENCE, USER_STATUS } from 'interfaces/enum';
import { FaLaptopHouse } from 'react-icons/fa';


interface LoginState {
  isLoading: boolean;
  error: string | null;
  profile?: UserInfo;
  categoryList: {
    _id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

const initialState: LoginState = {
  isLoading: true,
  error: null,
  categoryList: [],
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getUserInfo: (state, action: PayloadAction) => {
      state.isLoading = true;
      state.error= ""
    },
    getUserInfoSuccess: (state, action: PayloadAction<UserInfo>) => {
      state.profile = action.payload;
      state.isLoading = false;
      state.error= ""
    },
    getUserInfoFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error= action.payload
    },
    getUpdateUserInfo: (state, action: PayloadAction<UserInfoUpdate>) => {
      // console.log(action.payload)
      // state.profile = action.payload;
    },
    getCategoryList: (state, action: PayloadAction<any>) => {
      // console.log(action.payload)
      state.categoryList = action.payload;
    },
    // getUserInfoSuccess: (state, action: PayloadAction<UserInfo>) => {
    //   state.isLoading = false;
    // },
    // getUserInfoFailure: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {
  getUserInfo,
  getUserInfoSuccess,
  getUserInfoFailure,
  getUpdateUserInfo,
  getCategoryList,
} = loginSlice.actions;

// export const loginInfo = (state: RootState) => state.login.

export default loginSlice.reducer;
