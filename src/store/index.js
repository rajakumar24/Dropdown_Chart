import { combineReducers } from "redux";
import RecordReducers from "./Record/RecordReducer";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "auth",
  storage: storageSession,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  RecordReducers,
});

export default persistReducer(persistConfig, rootReducer);
