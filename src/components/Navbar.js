import { Flex, Link, Spacer } from "@chakra-ui/react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div id="Navbar">
      <Flex px={20} py={5} color="blue.600" fontWeight="bold" shadow="sm">
        <Link
          href="/"
          _hover={{ color: "blue.500", transform: "scale(0.99)" }}
          _active={{ color: "blue.400", transform: "scale(1.01)" }}>
          Home
        </Link>
        <Spacer />
        <Link
          href="/showcase"
          _hover={{ color: "blue.500", transform: "scale(0.99)" }}
          _active={{ color: "blue.400", transform: "scale(1.01)" }}>
          Showcase
        </Link>
        <Spacer />
        <Link
          href="/about"
          _hover={{ color: "blue.500", transform: "scale(0.99)" }}
          _active={{ color: "blue.400", transform: "scale(1.01)" }}>
          About
        </Link>
      </Flex>
    </div>
  );
}

export default Navbar;
