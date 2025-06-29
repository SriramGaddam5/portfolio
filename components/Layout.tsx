import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Box, Container, VStack, HStack, Text } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <Box minH="100vh" bg="black" display="flex" flexDirection="column">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Container
      maxW="container.xl"
      py={4}
      flex={1}
      display="flex"
      flexDirection="column"
    >
      <VStack gap={6} alignItems="stretch" flex={1}>
        <Box as="header" bg="black" p={4} borderRadius="md" shadow="sm">
          <HStack justifyContent="space-between">
            <Link href="/">Home</Link>
            <HStack as="nav" gap={4} justifyContent="center">
              <Link href="/work">Work</Link>
              <Text>|</Text>
              <Link href="/about">About</Link>
              <Text>|</Text>
              <Link
                href="https://sriramgaddam5.myportfolio.com/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </Link>
            </HStack>
          </HStack>
        </Box>

        <Box as="main" flex={1}>
          {children}
        </Box>
      </VStack>
    </Container>

    <Box as="footer" bg="black" p={4} borderRadius="md" shadow="sm" mt="auto">
      <Container maxW="container.xl">
        <Box borderBottom="1px" borderColor="gray.200" mb={2} />
        <Text textAlign="center" color="gray.600">
          © {new Date().getFullYear()} Sriram Gaddam
        </Text>
      </Container>
    </Box>
  </Box>
);

export default Layout;
