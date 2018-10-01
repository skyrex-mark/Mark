import React from "react";
import ReactDOM from "react-dom";
import { drawSegment } from "./draw";
import style from "./style";
export default class ColorSegment extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("touchmove", e => {
      e.preventDefault();
    });
    drawSegment();
  }
  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener("touchmove");
  }
  render() {
    return <canvas style={style.canvas} />;
  }
}
