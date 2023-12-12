import { SimpleGrid, Heading } from "@chakra-ui/react";
import ImageCard from "../components/ImageCard";
import "./Showcase.css";
import Skyward from "../images/Skyward.jpg";

function Showcase() {
  return (
    <div>
      <Heading p="30px">Showcase</Heading>
      <SimpleGrid minChildWidth="300px" spacing="20px" p="20px">
        <ImageCard
          imageSrc={Skyward}
          imageAlt="Self Portrait"
          imageTitle="Skyward"
          imageDate="4-12-2021"
          imageDescription="Low Poly Self Portrait from ART II - Digital Art & Media I created in Adobe Photoshop."
          imageTags={["Digital", "Self Portrait"]}
        />
      </SimpleGrid>
    </div>
  );
}

export default Showcase;
