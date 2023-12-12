import {
  Heading,
  Image,
  Text,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import ProfilePicture from "../images/Skyward.jpg";
import FallbackImage from "../images/Fallback.svg";
import { TbVaccine } from "react-icons/tb";
import { FaVirus } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { MdOutlineInventory, MdHexagon } from "react-icons/md";

function About() {
  return (
    <div>
      <Heading p="30px">About Me</Heading>
      <HStack mx="5" my="10">
        <Image
          src={ProfilePicture}
          width={250}
          fallbackSrc={FallbackImage}
          alt="Sriram Gaddam"
          rounded="xl"
        />
        <Text p="30px">
          Hi, I'm Sriram Gaddam. I like to create video games and I have
          experience with Python, Java, JavaScript (React, Typescript),
          HTML/CSS, C#, etc. Aside from coding, I like to draw, paint, and play
          my electric guitar. I really like the combination of art and
          programming you can see some of my projects{" "}
          <Link
            color="blue.500"
            href="https://www.khanacademy.org/profile/kaid_27778265738214400478373/projects">
            here
          </Link>
          . I've also made a few games in Unity:
          <List spacing={3} mt={5}>
            <ListItem>
              <ListIcon as={TbVaccine} color="red.500" />
              <Link
                color="blue.500"
                href="https://gamejolt.com/games/chronicles-of-contagion/853901">
                Chronicles of Contagion
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={IoEarth} color="blue.600" />
              <Link
                color="blue.500"
                href="https://gamejolt.com/games/Horizon/551728">
                Horizon
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaVirus} color="green.500" />
              <Link
                color="blue.500"
                href="https://medipeakapps.itch.io/corona-defenders">
                Corona Defenders
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdHexagon} />
              <Link
                color="blue.500"
                href="https://sriramgaddam5.github.io/hexagen/">
                Hexagen
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdOutlineInventory} color="gray.500" />
              <Link
                color="blue.500"
                href="https://sriramgaddam5.github.io/Crafting-2D-Sandbox-Game/">
                Inventory Crafting System
              </Link>
            </ListItem>
          </List>
        </Text>
      </HStack>
    </div>
  );
}

export default About;
