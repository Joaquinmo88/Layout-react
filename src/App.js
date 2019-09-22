import React from 'react';
import { Provider } from "react-redux";
import PublicRoutes from "./router";
import {store, history } from './redux/storage'


import firebase from "firebase";
import { FirebaseAuthProvider } from "@react-firebase/auth";

import { firebaseConfig } from './settings';


const App = () => {
  return (
    <Provider store={store}>
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <PublicRoutes history={history} />
      </FirebaseAuthProvider>
    </Provider>
  );
}

export default App;
