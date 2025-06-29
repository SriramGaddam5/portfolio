import Link from "next/link";
import { Box, Heading, Image, Text, Button, VStack } from "@chakra-ui/react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Portfolio | Home">
    <VStack gap={4} alignItems="start">
      <Heading>Hi, I'm Sriram Gaddam!</Heading>
      <Image
        src="https://user-images.githubusercontent.com/56180112/233874095-04b229a6-7391-4a45-a4ac-8c31b983d995.gif"
        alt="Profile"
      />
      <Text>
        I like to create video games and I have experience with Python, Java,
        JavaScript (React, Typescript), HTML/CSS, C#, etc. Aside from coding, I
        like to draw, paint, and play my electric guitar. I really like the
        combination of art and programming.
      </Text>
      <Button colorScheme="blue">
        <Link href="/about">About</Link>
      </Button>
    </VStack>
  </Layout>
);

export default IndexPage;
