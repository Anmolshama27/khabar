  
import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";
import Home from "./src/Home";

export default () =>
  <Provider store={store}>
    <Home />
  </Provider>;