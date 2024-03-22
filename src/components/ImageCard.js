import React, { useRef } from "react";
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
  ScaleFade,
} from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";
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

  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <div id="ImageCard">
      <ScaleFade
        initialScale={0.9}
        in={enterCount > 0}
        whileHover={{ scale: 1.01 }}>
        <Card maxW="sm" shadow="2xl" rounded="lg" ref={ref} m={1}>
          <CardBody>
            <Tooltip label={imageAlt} rounded="lg">
              <Image
                src={imageSrc}
                fallbackSrc="/images/Fallback.svg"
                alt={imageAlt}
                rounded="lg"
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
                <Tooltip
                  label={new Date(imageDate).toDateString()}
                  rounded="lg">
                  <Text color="gray.500" fontSize="sm">
                    {imageDate}
                  </Text>
                </Tooltip>
              </HStack>
              <Collapse startingHeight={0} in={show}>
                {imageDescription}
              </Collapse>
              <Tooltip label={show ? "See less" : "See more"} rounded="lg">
                <Button
                  colorScheme="gray"
                  variant={show ? "ghost" : "solid"}
                  size="sm"
                  onClick={handleDescToggle}
                  mt="1rem">
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
      </ScaleFade>
      <Modal isOpen={isOpen} onClose={onClose} rounded="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image
              src={imageSrc}
              fallbackSrc="/images/Fallback.svg"
              alt={imageAlt}
              rounded="lg"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ImageCard;
