import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IPost, UserInfo } from "interfaces";
import { IPostDetail } from "./interface";

interface PostState {
  isLoading: boolean;
  error: string | null;
  postDetail: IPostDetail|null;
  postsList: any;
}

const initialState: PostState = {
  isLoading: true,
  error: null,
  postDetail: null,
  postsList: []
};


export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostDetailInfo: (state, action: PayloadAction) => {
      state.isLoading = true;
    },
    getPostDetailInfoSuccess: (state, action: PayloadAction<IPostDetail>) => {
      state.isLoading = false;
      state.error=""
      state.postDetail = action.payload
    },
    getPostDetailInfoFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getPostDetailInfo,
  getPostDetailInfoSuccess,
  getPostDetailInfoFailure,
} = postSlice.actions;

// export const loginInfo = (state: RootState) => state.login.

export default postSlice.reducer;
