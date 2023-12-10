import { SimpleGrid, Heading } from "@chakra-ui/react";
import ImageCard from "../components/ImageCard";
import "./Showcase.css";

function Showcase() {
  return (
    <div>
      <Heading p="30px">Showcase</Heading>
      <SimpleGrid minChildWidth="300px" spacing="40px" p="30px">
        <ImageCard
          imageSrc="https://raw.githubusercontent.com/SriramGaddam5/portfolio/main/public/images/Skyward.jpg"
          imageAlt="Self Portrait"
          imageTitle="Skyward"
          imageDate="2020"
          imageDescription="Digital media"
          imageTags="Digital"
        />
      </SimpleGrid>
    </div>
  );
}

export default Showcase;
