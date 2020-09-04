import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./config/store";
import * as serviceWorker from "./serviceWorker";
import App from "./views/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
