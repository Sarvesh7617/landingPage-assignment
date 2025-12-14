import {useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Particle=()=>{
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "grab",
                  parallax: { enable: false, force: 60, smooth: 10 },
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                grab: {
                  distance: 300,
                  links: {
                    opacity: 0.5,
                  },
                  onHover: {
                    enable: false,
                    mode: "connect",
                  },
                },
              },
            },
            particles: {
              color: {
                value: "hsl(0, 100%, 50%)",
                animation: {
                  enable: true,
                  speed: 20,
                  sync: false,
                }
              },
              links: {
                color: "#efa686ff",
                distance: 170,
                enable: true,
                opacity: 1,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area:3000,
                },
                value: 200,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}



export default Particle;