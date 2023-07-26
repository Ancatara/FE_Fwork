import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import factories from "./factories";

import {
  getUserInfo,
  getUpdateUserInfo,
  getUserInfoSuccess,
  getUserInfoFailure,
  // getUserInfoFailure,
  // getUserInfoSuccess,
} from "./loginSlide";

function* handleGetUserInfo() {
  yield takeEvery(getUserInfo.type, function* (payload: PayloadAction) {
    try {
      const response: any = yield call(() => factories.requestUserInfo());
      if (response) {
        yield put({
          type: getUserInfoSuccess.type,
          payload: response.data,
        });
      }else{
        localStorage.removeItem("access_token");
        yield put({
          type: getUserInfoFailure.type,
          payload: "Invalid Email or Password"
        });
      }
    } catch (error :any) {
      localStorage.removeItem("access_token");
      if(error.message==="Network Error"){
        yield put({
          type: getUserInfoFailure.type,
          payload:"Lỗi hệ thống"
        });
      }else{
        yield put({
          type: getUserInfoFailure.type,
          payload:error.response.data.message
        });
      }
    }
  });
}

export default function* rootSaga() {
  yield all([ fork(handleGetUserInfo)]);
}
