import { Flex, Link, Spacer, Text, Box, Tooltip } from "@chakra-ui/react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div id="Footer">
      <Flex p={5} mt={10} bg="blue.900" color="white" gap="5">
        <Text p="1">© 2023 Sriram Gaddam</Text>
        <Spacer />
        <Tooltip label="Send me an email" rounded="lg">
          <Link
            href="https://mailto:sriramgaddam5@gmail.com?subject=some%20catchy%20subject%20line&body=write%20something%20here..."
            isExternal
            p="1"
            _hover={{ color: "blue.50", transform: "scale(0.99)" }}
            _active={{ color: "blue.100", transform: "scale(1.01)" }}>
            sriramgaddam5@gmail.com
          </Link>
        </Tooltip>
        <Tooltip label="Check out my GitHub" rounded="lg">
          <Link href="https://github.com/SriramGaddam5" isExternal>
            <Box
              px="2"
              py="1"
              rounded="full"
              bg="white"
              color="blue.900"
              _hover={{ background: "blue.50", transform: "scale(0.99)" }}
              _active={{ background: "blue.100", transform: "scale(1.01)" }}>
              GitHub
            </Box>
          </Link>
        </Tooltip>
        <Tooltip label="Look at my LinkedIn" rounded="lg">
          <Link
            href="https://www.linkedin.com/in/sriram-gaddam-1819841bb"
            isExternal>
            <Box
              px="2"
              py="1"
              rounded="full"
              bg="white"
              color="blue.900"
              _hover={{ background: "blue.50", transform: "scale(0.99)" }}
              _active={{ background: "blue.100", transform: "scale(1.01)" }}>
              LinkedIn
            </Box>
          </Link>
        </Tooltip>
      </Flex>
    </div>
  );
}

export default Footer;
