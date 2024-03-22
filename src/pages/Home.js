import { Text, VStack, HStack } from "@chakra-ui/react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import { loadPolygonPath } from "@tsparticles/path-polygon";
import InfoCard from "../components/InfoCard";
import ImageCarousel from "../components/ImageCarousel";
import "../styles/Home.css";
import logoData from "../logoData.json";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  console.log([
    logoData[0].logoData.map((logo) => [logo.imageSrc, logo.imageAlt]),
  ]);
  return (
    <div id="Body">
      <Particles
        id="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 200,
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
                width: 1,
                color: "#ffffff",
              },
              polygon: {
                nb_sides: 6,
              },
            },
            opacity: {
              value: 0,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 5 },
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 1,
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
              bubble: {
                distance: 30,
                size: 20,
                duration: 2,
                opacity: 1,
                speed: 2,
              },
              push: {
                particles_nb: 1,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: {
                  r: 255,
                  g: 255,
                  b: 255,
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
          // particles: {
          //   color: {
          //     value: "#FF0000",
          //     animation: {
          //       enable: true,
          //       speed: 10,
          //     },
          //   },
          //   move: {
          //     direction: "none",
          //     enable: true,
          //     outModes: {
          //       default: "destroy",
          //     },
          //     path: {
          //       clamp: false,
          //       enable: true,
          //       delay: {
          //         value: 0,
          //       },
          //       generator: "polygonPathGenerator",
          //       options: {
          //         sides: 6,
          //         turnSteps: 30,
          //         angle: 30,
          //       },
          //     },
          //     random: false,
          //     speed: 3,
          //     straight: false,
          //     trail: {
          //       fill: {
          //         color: "#000000",
          //       },
          //       length: 20,
          //       enable: true,
          //     },
          //   },
          //   number: {
          //     value: 0,
          //   },
          //   opacity: {
          //     value: 1,
          //   },
          //   shape: {
          //     type: "circle",
          //   },
          //   size: {
          //     value: 2,
          //   },
          // },
          // background: {
          //   color: "#000000",
          // },
          // fullScreen: {
          //   enable: false,
          //   zIndex: -1,
          // },
          // emitters: {
          //   direction: "none",
          //   rate: {
          //     quantity: 1,
          //     delay: 0.25,
          //   },
          //   size: {
          //     width: 0,
          //     height: 0,
          //   },
          //   position: {
          //     x: 50,
          //     y: 50,
          //   },
          // },
        }}
      />
      <VStack>
        <Text
          bgGradient="linear(to-r, blue.200, blue.900)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          mt={10}>
          Sriram Gaddam's Portfolio
        </Text>
        <ImageCarousel
          logoList={[
            logoData[0].logoData.map((logo) => [logo.imageSrc, logo.imageAlt]),
          ]}
        />
        <HStack gap={20}>
          <InfoCard
            imageSrc="/images/Sriram Gaddam - Drapery with Metallic & Glass Objects.jpg"
            imageAlt="Drapery with Metallic & Glass Objects"
            cardTitle="My work"
            cardDescription="See my past works and projects I worked on"
            cardLink="/showcase"
          />
          <InfoCard
            imageSrc="/images/Skyward.jpg"
            imageAlt="Self Portrait"
            cardTitle="About me"
            cardDescription="Learn more about me"
            cardLink="/about"
          />
        </HStack>
      </VStack>
    </div>
  );
}

export default Home;
