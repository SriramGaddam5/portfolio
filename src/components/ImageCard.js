import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  HStack,
  Heading,
  Text,
  Divider,
  Tag,
  Collapse,
  Button,
} from "@chakra-ui/react";

function ImageCard() {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <HStack justifyContent="space-between">
            <Heading size="md">Architecture Study</Heading>
            <Text color="gray.500">11/30/23</Text>
          </HStack>
          <Collapse startingHeight={20} in={show}>
            I feel like I could have made some of the lines a bit straighter and
            increase the contrast overall.
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt="1rem">
            Show {show ? "Less" : "More"}
          </Button>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack spacing="2">
          <Tag>Charcoal</Tag>
          <Tag colorScheme="green">ARTS 115</Tag>
          <Tag colorScheme="orange">2023 Fall Show</Tag>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default ImageCard;
