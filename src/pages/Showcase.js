import { SimpleGrid, Heading } from "@chakra-ui/react";
import ImageCard from "../components/ImageCard";
import "./Showcase.css";

function Showcase() {
  return (
    <div>
      <Heading p="30px">Showcase</Heading>
      <SimpleGrid minChildWidth="300px" spacing="40px" p="30px">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </SimpleGrid>
    </div>
  );
}

export default Showcase;
