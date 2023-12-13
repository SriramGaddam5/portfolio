import { Wrap, WrapItem, Heading } from "@chakra-ui/react";
import ImageCard from "../components/ImageCard";
import "./Showcase.css";
import Skyward from "../images/Skyward.jpg";
import Drapery from "../images/Sriram Gaddam - Drapery with Metallic & Glass Objects.jpg";
import Architecture from "../images/Sriram Gaddam - Drawing Architecture.jpg";
import FinalAssignment from "../images/Sriram Gaddam - Final Assignment.jpg";
import SelfPortrait from "../images/Sriram Gaddam - Self Portrait.jpg";
import NonObjective from "../images/Sriram Gaddam - Project 9 Non-Objective Story and Animation.png";

function Showcase() {
  return (
    <div>
      <Heading p="30px">Showcase</Heading>
      <Wrap p={20}>
        <WrapItem>
          <ImageCard
            imageSrc={Skyward}
            imageAlt="Low poly digital Self Portrait"
            imageTitle="Skyward"
            imageDate="4-12-2021"
            imageDescription="Low poly self portrait from ART II - Digital Art & Media I created in Adobe Photoshop."
            imageTags={["Digital", "Self Portrait"]}
          />
        </WrapItem>
        <WrapItem>
          <ImageCard
            imageSrc={Drapery}
            imageAlt="Drapery with Metallic & Glass Objects"
            imageTitle="Drapery with Metallic & Glass Objects"
            imageDate="12-5-2023"
            imageDescription="Charcoal drawing from ARTS 115"
            imageTags={["Charcoal"]}
          />
        </WrapItem>
        <WrapItem>
          <ImageCard
            imageSrc={Architecture}
            imageAlt="2 point perspective charcoal drawing of Texas A&M department of entomology building"
            imageTitle="Drawing Architecture"
            imageDate="12-5-2023"
            imageDescription="2 point perspective charcoal drawing of Texas A&M department of entomology building from ARTS 115"
            imageTags={["Charcoal"]}
          />
        </WrapItem>
        <WrapItem>
          <ImageCard
            imageSrc={FinalAssignment}
            imageAlt="Self Portrait"
            imageTitle="Self Portrait"
            imageDate="12-5-2023"
            imageDescription="Final Assignment from ARTS 115"
            imageTags={["Charcoal", "Self Portrait"]}
          />
        </WrapItem>
        <WrapItem>
          <ImageCard
            imageSrc={SelfPortrait}
            imageAlt="Self Portrait"
            imageTitle="Self Portrait"
            imageDate="12-5-2023"
            imageDescription="Self Portrait from ARTS 115"
            imageTags={["Charcoal", "Self Portrait"]}
          />
        </WrapItem>
        <WrapItem>
          <ImageCard
            imageSrc={NonObjective}
            imageAlt="Four bristol four inch square panels mounted on black matboard."
            imageTitle="Non-Objective Story"
            imageDate="12-5-2023"
            imageDescription="Each panel represents a sentence in a non-objective story."
            imageTags={["Color Pencil"]}
          />
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default Showcase;
