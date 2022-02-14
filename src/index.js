import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'semantic-ui-css/semantic.min.css'

import "./index.css";
import createStore from "./redux/store";
import App from "./containers/App-container";

ReactDOM.render(
    <Provider store={createStore()}>
        <App />
    </Provider>, document.getElementById("root")
);
