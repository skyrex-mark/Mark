import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
const Splash = () => (
  <Segment basic>
    <Image />
    <Header raised as="h1" padded="very" size="large" textAlign="center">
      Xiaofeng Xie
    </Header>
    <Header
      secondary
      as="h2"
      padded="very"
      textAlign="center"
      inverted
      color="grey"
    >
      Read , Code and Think
    </Header>
  </Segment>
);

export default Splash;
