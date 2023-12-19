import { Wrap, WrapItem, Heading } from "@chakra-ui/react";
import ImageCard from "../components/ImageCard";
import "../styles/Showcase.css";
import imageData from "../imageData.json";

function Showcase() {
  return (
    <div id="Body">
      <Heading p="30px">Showcase</Heading>
      <Wrap p={20}>
        {imageData[0].imageData.map((image) => (
          <WrapItem>
            <ImageCard
              imageSrc={image.imageSrc}
              imageAlt={image.imageAlt}
              imageTitle={image.imageTitle}
              imageDate={image.imageDate}
              imageDescription={image.imageDescription}
              imageTags={image.imageTags}
            />
          </WrapItem>
        ))}
      </Wrap>
    </div>
  );
}

export default Showcase;
