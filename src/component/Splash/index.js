import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import GithubLogo from "../../asset/image/github.svg";
import LinkedinLogo from "../../asset/image/linkedin.svg";
import styles from "./styles";
const Splash = () => (
  <Segment basic textAlign="center" style={styles.segment}>
    <Header name="title" style={styles.title} size="huge" padded="very">
      Xiaofeng Xie
    </Header>

    <Header style={styles.subTitle} size="large" padded="very" color="grey">
      Read , Code and Think
    </Header>

    <Image.Group size="mini">
      <Image
        style={styles.image}
        src={GithubLogo}
        href="https://github.com/skyrex-mark"
      />
      <Image
        style={styles.image}
        src={LinkedinLogo}
        href="https://www.linkedin.com/in/markxie/"
      />
    </Image.Group>
  </Segment>
);

export default Splash;
