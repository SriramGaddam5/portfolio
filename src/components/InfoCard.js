import React from "react";
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import FallbackImage from "../images/Fallback.svg";
import "../styles/InfoCard.css";

function InfoCard({
  imageSrc,
  imageAlt,
  cardTitle,
  cardDescription,
  cardLink,
}) {
  return (
    <div id="InfoCard">
      <LinkBox
        maxW="sm"
        my={10}
        rounded="lg"
        shadow="xl"
        _hover={{
          shadow: "2xl",
          transform: "scale(0.99)",
          bgColor: "gray.50",
        }}
        _active={{
          transform: "scale(1.01)",
          bgColor: "white",
        }}>
        <HStack>
          <Image
            src={imageSrc}
            maxW={{ base: "100%", sm: "200px" }}
            fallbackSrc={FallbackImage}
            alt={imageAlt}
            borderRadius="lg"
          />
          <VStack p={5}>
            <Heading size="md" my="2">
              <LinkOverlay href={cardLink}>{cardTitle}</LinkOverlay>
            </Heading>
            <Text>{cardDescription}</Text>
          </VStack>
        </HStack>
      </LinkBox>
    </div>
  );
}

export default InfoCard;
