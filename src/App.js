import React, { Component } from "react";
import "./App.css";
import ColorSegment from "./component/ColorSegment";
import Particle from "./component/Particle";
import Splash from "./component/Splash";
class App extends Component {
  render() {
    return (
      <>
        <ColorSegment />
        <Splash />
        <Particle />
      </>
    );
  }
}

export default App;
