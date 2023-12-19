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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import "../styles/ImageCard.css";

function ImageCard({
  imageSrc,
  imageAlt,
  imageTitle,
  imageDate,
  imageDescription,
  imageTags,
}) {
  const [show, setShow] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDescToggle = () => setShow(!show);

  return (
    <div id="ImageCard">
      <Card
        maxW="sm"
        shadow="xl"
        _hover={{
          shadow: "2xl",
          transform: "scale(0.99)",
          bgColor: "gray.50",
        }}>
        <CardBody>
          <Tooltip label={imageAlt} rounded="lg">
            <Image
              src={imageSrc}
              fallbackSrc="/images/Fallback.svg"
              alt={imageAlt}
              rounded="xl"
              _hover={{
                shadow: "2xl",
                transform: "scale(0.99)",
              }}
              _active={{
                shadow: "xl",
                transform: "scale(1.01)",
              }}
              onClick={onOpen}
            />
          </Tooltip>
          <Stack mt="6" spacing="3">
            <HStack justifyContent="space-between">
              <Tooltip label={imageTitle} rounded="lg">
                <Heading size="md">{imageTitle}</Heading>
              </Tooltip>
              <Tooltip label={new Date(imageDate).toDateString()} rounded="lg">
                <Text color="gray.500" fontSize="sm">
                  {imageDate}
                </Text>
              </Tooltip>
            </HStack>
            <Collapse startingHeight={0} in={show}>
              {imageDescription}
            </Collapse>
            <Tooltip label={show ? "See less" : "See more"} rounded="lg">
              <Button size="sm" onClick={handleDescToggle} mt="1rem">
                {show ? "Less" : "More"}
              </Button>
            </Tooltip>
          </Stack>
        </CardBody>
        <CardFooter>
          <HStack spacing="2">
            {Array.isArray(imageTags) &&
              imageTags.map((tag) => (
                <Tooltip label={tag[0]} rounded="lg">
                  <Tag colorScheme={tag[1]}>{tag[0]}</Tag>
                </Tooltip>
              ))}
          </HStack>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} rounded="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image
              src={imageSrc}
              fallbackSrc="/images/Fallback.svg"
              alt={imageAlt}
              rounded="xl"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ImageCard;
