import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AdminReducer from "./reducer/AdminSlice";
import ImagesSlice from "./reducer/ImagesSlice";

const persistConfig = {
  key: "photographer_root",
  version: 1,
  storage,
  whitelist: ["admin", "Image"], 
};

const rootReducer = combineReducers({
  admin: AdminReducer,
  Image: ImagesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
