import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import factories from "./factories";
import { getPostDetailInfo, getPostDetailInfoFailure, getPostDetailInfoSuccess } from "./postSlice";

function* handleGetPostDetail() {
  yield takeEvery(getPostDetailInfo.type, function* (payload: PayloadAction<string>) {
    try {
      const response: any = yield call(() => factories.getPostById(payload.payload));
      console.log(response)
      if (response) {
        yield put({
          type: getPostDetailInfoSuccess.type,
          payload: response.data,
        });
      }else{
        yield put({
          type: getPostDetailInfoFailure.type,
          payload: "Invalid Email or Password"
        });
      }
    } catch (error:any) {
      if(error.message==="Network Error"){
        yield put({
          type: getPostDetailInfoFailure.type,
          payload:"Lỗi hệ thống"
        });
      }else{
        yield put({
          type: getPostDetailInfoFailure.type,
          payload:error.response.data.message
        });
      }
    }
  });
}

export default function* rootSaga() {
  yield all([ fork(handleGetPostDetail)]);
}
