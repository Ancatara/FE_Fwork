import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IPost, UserInfo } from "interfaces";
import { IUserResponse, UserState } from "./interface";


const initialState: UserState = {
  isLoading: true,
  error: null,
  userDetail: null,
  userList: []
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDetailInfo: (state, action: PayloadAction) => {
      state.isLoading = true;
    },
    getUserDetailInfoSuccess: (state, action: PayloadAction<IUserResponse>) => {
      state.isLoading = false;
      state.error=""
      state.userDetail = action.payload
    },
    getUserDetailInfoFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getUserListInfo: (state, action: PayloadAction) => {
      state.isLoading = true;
    },
    getUserListInfoSuccess: (state, action: PayloadAction<IUserResponse[]>) => {
      state.isLoading = false;
      state.error=""
      state.userList = action.payload
    },
    getUserListInfoFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUserDetailInfo,
  getUserDetailInfoSuccess,
  getUserDetailInfoFailure,
  getUserListInfo,
  getUserListInfoSuccess,
  getUserListInfoFailure,
} = userSlice.actions;
export default userSlice.reducer;
