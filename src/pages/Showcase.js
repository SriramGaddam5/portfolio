import { SimpleGrid, Heading } from "@chakra-ui/react";
import ImageCard from "../components/ImageCard";
import "./Showcase.css";
import Skyward from "../images/ART II - Digital Art & Media I/Skyward.jpg";

function Showcase() {
  return (
    <div>
      <Heading p="30px">Showcase</Heading>
      <SimpleGrid minChildWidth="300px" spacing="40px" p="30px">
        <ImageCard
          imageSrc={Skyward}
          imageAlt="Self Portrait"
          imageTitle="Skyward"
          imageDate="2020"
          imageDescription="Self Portrait from ART II - Digital Art & Media I created in Adobe Photoshop."
          imageTags={["Digital", "Self Portrait"]}
        />
      </SimpleGrid>
    </div>
  );
}

export default Showcase;
