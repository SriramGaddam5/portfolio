import { Flex, Link, Spacer, Text, Box, Highlight } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex p={5} mt={10} bg="blue.900" color="white" gap="5">
      <Text p="1">© 2023 Sriram Gaddam</Text>
      <Spacer />
      <Text p="1">sriramgaddam5@gmail.com</Text>
      <Link href="https://github.com/SriramGaddam5">
        <Box
          px="2"
          py="1"
          rounded="full"
          bg="white"
          color="blue.900"
          _hover={{ background: "blue.50" }}
          _active={{ background: "blue.100" }}>
          Github
        </Box>
      </Link>
      <Link href="https://www.linkedin.com/in/sriram-gaddam-1819841bb">
        <Box
          px="2"
          py="1"
          rounded="full"
          bg="white"
          color="blue.900"
          _hover={{ background: "blue.50" }}
          _active={{ background: "blue.100" }}>
          LinkedIn
        </Box>
      </Link>
    </Flex>
  );
}

export default Footer;
