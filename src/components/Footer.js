import { Flex, Link, Spacer, Text, Box, Tooltip } from "@chakra-ui/react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div id="Footer">
      <Flex p={5} mt={10} bg="blue.900" color="white" gap="5">
        <Text p="1">© {new Date().getFullYear()} Sriram Gaddam</Text>
        <Spacer />
        <Tooltip label="Check out my GitHub" rounded="lg">
          <Link href="https://github.com/SriramGaddam5" target="_blank">
            <Box
              px="2"
              py="1"
              rounded="full"
              bg="white"
              color="blue.900"
              _hover={{ background: "blue.50", transform: "scale(0.99)" }}
              _active={{ background: "blue.100", transform: "scale(1.01)" }}
            >
              GitHub
            </Box>
          </Link>
        </Tooltip>
        <Tooltip label="Look at my LinkedIn" rounded="lg">
          <Link
            href="https://www.linkedin.com/in/sriram-gaddam"
            target="_blank"
          >
            <Box
              px="2"
              py="1"
              rounded="full"
              bg="white"
              color="blue.900"
              _hover={{ background: "blue.50", transform: "scale(0.99)" }}
              _active={{ background: "blue.100", transform: "scale(1.01)" }}
            >
              LinkedIn
            </Box>
          </Link>
        </Tooltip>
      </Flex>
    </div>
  );
}

export default Footer;
