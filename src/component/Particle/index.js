import React from "react";
import Particles from "react-particles-js";
import styles from "./styles";

const Particle = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 30
        },
        line_linked: {
          distance: 100,
          shadow: {
            enable: true,
            color: "white",
            blur: 10
          }
        },
        move: {
          random: true,
          speed: 15
        }
      }
    }}
    style={styles.particle}
  />
);

export default Particle;
