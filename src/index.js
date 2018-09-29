import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactGA.initialize("UA-126648076-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
