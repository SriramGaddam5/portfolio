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
  Tooltip,
  Tag,
  Collapse,
  Button,
} from "@chakra-ui/react";
import FallbackImage from "../images/Fallback.svg";

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
    <Card
      maxW="sm"
      shadow="xl"
      _hover={{ shadow: "2xl", transform: "scale(0.99)" }}>
      <CardBody>
        <Tooltip label={imageAlt} rounded="lg">
          <Image
            src={imageSrc}
            fallbackSrc={FallbackImage}
            alt={imageAlt}
            rounded="xl"
          />
        </Tooltip>
        <Stack mt="6" spacing="3">
          <HStack justifyContent="space-between">
            <Heading size="md">{imageTitle}</Heading>
            <Tooltip label={new Date(imageDate).toDateString()} rounded="lg">
              <Text color="gray.500" fontSize="sm">
                {imageDate}
              </Text>
            </Tooltip>
          </HStack>
          <Collapse startingHeight={0} in={show}>
            {imageDescription}
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt="1rem">
            {show ? "Less" : "More"}
          </Button>
        </Stack>
      </CardBody>
      <CardFooter>
        <HStack spacing="2">
          {Array.isArray(imageTags) &&
            imageTags.map((tag) => <Tag colorScheme="blue">{tag}</Tag>)}
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default ImageCard;
