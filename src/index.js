import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
const airbrake = new airbrakeJs.Client({
  projectId: 197469,
  projectKey: "c8a4a821b675324b8ea6a7b7e65098b4"
});
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
