import { HStack, Image, Tooltip } from "@chakra-ui/react";
import "../styles/ImageCarousel.css";
import FallbackImage from "../images/Fallback.svg";

function ImageCarousel({ logoList }) {
  return (
    <div id="ImageCarousel">
      <HStack spacing={2}>
        {Array.isArray(logoList) &&
          logoList.map((logo) => (
            <Tooltip label="Logo" rounded="lg">
              <Image
                src={logo}
                maxW={100}
                fallbackSrc={FallbackImage}
                alt="Logo"
                _hover={{
                  transform: "scale(0.99)",
                }}
              />
            </Tooltip>
          ))}
      </HStack>
    </div>
  );
}

export default ImageCarousel;
