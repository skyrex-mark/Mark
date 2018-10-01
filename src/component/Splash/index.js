import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import GithubLogo from "../../asset/image/github.svg";
import LinkedinLogo from "../../asset/image/linkedin.svg";
import style from "./style";
const Splash = () => (
  <Segment basic textAlign="center">
    <Header name="title" style={style.title} size="huge" padded="very">
      Xiaofeng Xie
    </Header>

    <Header style={style.subTitle} size="large" padded="very" color="grey">
      Read , Code and Think
    </Header>

    <Image.Group size="mini">
      <Image
        style={style.image}
        src={GithubLogo}
        href="https://github.com/skyrex-mark"
      />
      <Image
        style={style.image}
        src={LinkedinLogo}
        href="https://www.linkedin.com/in/markxie/"
      />
    </Image.Group>
  </Segment>
);

export default Splash;
