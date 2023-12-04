import { Flex, Link, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex p={5}>
      <Link href="/showcase">Showcase</Link>
      <Spacer />
      <Link as="" href="/VIST105">
        VIST 105
      </Link>
      <Spacer />
      <Link href="/about">About</Link>
    </Flex>
  );
}

export default Navbar;
