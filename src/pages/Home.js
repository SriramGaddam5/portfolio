import { Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Heading as="h1" size="4xl">
        Sriram Gaddam's Portfolio
      </Heading>
    </div>
  );
}

export default Home;
