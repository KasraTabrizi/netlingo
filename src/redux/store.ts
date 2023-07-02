import { configureStore } from "@reduxjs/toolkit";
import unitReducer from "./unitSlice";
import exerciseSlice from "./exerciseSlice";

export const store = configureStore({
  reducer: {
    units: unitReducer,
    exercises: exerciseSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;