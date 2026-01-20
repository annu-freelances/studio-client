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
import CustomerSlice from "./reducer/CustomerSlice";

const persistConfig = {
  key: "photographer_root",
  version: 1,
  storage,
  whitelist: ["admin", "Image", "Customer"], 
};

const rootReducer = combineReducers({
  admin: AdminReducer,
  Image: ImagesSlice,
  Customer: CustomerSlice
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
