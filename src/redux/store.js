import { configureStore, combineReducers } from "@reduxjs/toolkit";

import stateSite from "./slices/state-site";

const rootReducer = combineReducers({
  stateSite,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
