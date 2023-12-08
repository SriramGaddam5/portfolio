import { Flex, Link, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex px={20} py={5} color="blue.600" fontWeight="bold">
      <Link href="/">Home</Link>
      <Spacer />
      <Link href="/showcase">Showcase</Link>
      <Spacer />
      <Link href="/about">About</Link>
    </Flex>
  );
}

export default Navbar;
