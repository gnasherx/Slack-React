import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  firestoreReducer: firestoreReducer,
  firebaseReducer: firebaseReducer
});

export default rootReducer;
