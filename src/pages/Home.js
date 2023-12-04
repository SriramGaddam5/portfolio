import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="home-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 100,
              limit: 300,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 0,
                color: "#ffffff",
              },
              polygon: {
                nb_sides: 6,
              },
              image: {
                src: "images/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: { min: 0, max: 30 },
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: { min: 1, max: 3 },
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 50,
                size: 100,
                duration: 2,
                opacity: 1,
                speed: 2,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 1,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: {
                  r: 246,
                  g: 249,
                  b: 252,
                },
              },
              opacity: 1,
            },
          },
          retina_detect: true,
          fps_limit: 60,
          background: {
            image:
              "url('https://static.vecteezy.com/system/resources/thumbnails/001/217/366/small/polygonal-blue-background.jpg')",
          },
        }}
      />
      <Navbar />
      <Text
        bgGradient="linear(to-r, blue.200, blue.900)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">
        Sriram Gaddam's Portfolio
      </Text>
      <Text>The</Text>
    </div>
  );
}

export default Home;
