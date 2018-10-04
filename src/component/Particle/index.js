import React from "react";
import Particles from "react-particles-js";
import styles from "./styles";

const Particle = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 65
        },
        line_linked: {
          distance: 200,
          shadow: {
            enable: true,
            color: "white",
            blur: 100
          }
        },
        move: {
          random: true,
          speed: 5
        }
      }
    }}
    style={styles}
  />
);

export default Particle;
