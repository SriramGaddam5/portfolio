import { HStack, Image, Tooltip } from "@chakra-ui/react";
import "../styles/ImageCarousel.css";

function ImageCarousel({ logoList }) {
  return (
    <div id="ImageCarousel">
      <HStack spacing={2}>
        {Array.isArray(logoList) &&
          logoList.map((logo) => (
            <Tooltip label={logo[1]} rounded="lg">
              <Image
                src={logo[0]}
                fallbackSrc="/images/Fallback.svg"
                maxW={100}
                alt={logo[1]}
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
