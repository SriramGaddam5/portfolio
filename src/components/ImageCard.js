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

function ImageCard({
  imageSrc,
  imageAlt,
  imageTitle,
  imageDate,
  imageDescription,
  imageTags,
}) {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={imageSrc} alt={imageAlt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <HStack justifyContent="space-between">
            <Heading size="md">{imageTitle}</Heading>
            <Text color="gray.500">{imageDate}</Text>
          </HStack>
          <Collapse startingHeight={0} in={show}>
            {imageDescription}
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt="1rem">
            {show ? "Less" : "More"}
          </Button>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack spacing="2">
          <Tag colorScheme="blue">{imageTags}</Tag>
          {/* {imageTags.map((tag) => (
            <Tag colorScheme="blue">{tag}</Tag>
          ))} */}
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default ImageCard;
