import { Flex, Link, Tooltip } from "@chakra-ui/react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div id="Navbar">
      <Flex
        py={5}
        color="blue.600"
        fontWeight="bold"
        shadow="sm"
        gap="12"
        justifyContent="center"
        alignItems="center"
      >
        <Tooltip label="Home page" rounded="lg">
          <Link
            href="/"
            _hover={{ color: "blue.500", transform: "scale(0.99)" }}
            _active={{ color: "blue.400", transform: "scale(1.01)" }}
          >
            Home
          </Link>
        </Tooltip>
        <Tooltip label="See my work" rounded="lg">
          <Link
            href="/showcase"
            _hover={{ color: "blue.500", transform: "scale(0.99)" }}
            _active={{ color: "blue.400", transform: "scale(1.01)" }}
          >
            Showcase
          </Link>
        </Tooltip>
        <Tooltip label="Learn more about me" rounded="lg">
          <Link
            href="/about"
            _hover={{ color: "blue.500", transform: "scale(0.99)" }}
            _active={{ color: "blue.400", transform: "scale(1.01)" }}
          >
            About
          </Link>
        </Tooltip>
      </Flex>
    </div>
  );
}

export default Navbar;
