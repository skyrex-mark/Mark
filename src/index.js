import LogRocket from "logrocket";
import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

LogRocket.init("qlt1rm/mark");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
