  
import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";
import Home from "./src/Home";
import SignupScreen from "./src/SignupScreen";
import SignInScreen from "./src/SignInScreen";

export default () =>
  <Provider store={store}>
    <SignInScreen />
  </Provider>;