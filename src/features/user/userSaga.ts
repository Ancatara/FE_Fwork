import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import factories from "./factories";
import { getUserDetailInfo, getUserDetailInfoFailure, getUserDetailInfoSuccess, getUserListInfo, getUserListInfoFailure, getUserListInfoSuccess } from "./userSlice";
import { IUserListFilter } from "./interface";

function* handleGetUserDetail() {
  yield takeEvery(getUserDetailInfo.type, function* (payload: PayloadAction<string>) {
    try {
      const response: any = yield call(() => factories.getUserById(payload.payload));
      console.log(response)
      if (response) {
        yield put({
          type: getUserDetailInfoSuccess.type,
          payload: response.data,
        });
      }else{
        yield put({
          type: getUserDetailInfoFailure.type,
          payload: "Error"
        });
      }
    } catch (error:any) {
      console.log(error)
      if(error.message==="Network Error"){
        yield put({
          type: getUserDetailInfoFailure.type,
          payload:"Lỗi hệ thống"
        });
      }else{
        yield put({
          type: getUserDetailInfoFailure.type,
          payload:error.response.data.message
        });
      }
    }
  });
}
function* handleGetUserList() {
  yield takeEvery(getUserListInfo.type, function* (payload: PayloadAction<IUserListFilter>) {
    try {
      const response: any = yield call(() => factories.getListWorker(payload.payload));
      if (response) {
        yield put({
          type: getUserListInfoSuccess.type,
          payload: response.data,
        });
      }else{
        yield put({
          type: getUserListInfoFailure.type,
          payload: "Error"
        });
      }
    } catch (error:any) {
      if(error.message==="Network Error"){
        yield put({
          type: getUserListInfoFailure.type,
          payload:"Lỗi hệ thống"
        });
      }else{
        yield put({
          type: getUserListInfoFailure.type,
          payload:error.response.data.message
        });
      }
    }
  });
}
export default function* rootSaga() {
  yield all([ fork(handleGetUserDetail),fork(handleGetUserList) ]);
}
