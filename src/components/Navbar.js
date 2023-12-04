import { Flex, Link, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex>
      <Link href="/showcase">Showcase</Link>
      <Spacer />
      <Link as="" href="/VIST 105">
        VIST 105
      </Link>
      <Spacer />
      <Link href="/about">About</Link>
    </Flex>
  );
}

export default Navbar;
