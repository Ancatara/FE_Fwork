import { configureStore } from '@reduxjs/toolkit';
import loginSlice from 'features/login/loginSlide';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import postSlice from 'features/post/postSlice';
import userSlice from 'features/user/userSlice';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    login:loginSlice,
    post: postSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch