import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Box, Container, VStack, HStack, Text } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";

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
              <Link href="/about">About</Link>
              <Text>|</Text>
              <Link href="/blog">Blog</Link>
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

    <Box as="footer" bg="black" p={4} borderRadius="md" shadow="sm" mt={16}>
      <Container maxW="container.xl" mb={4}>
        <Box borderBottom="1px" borderColor="gray.200" mb={2} />
        <VStack gap={3}>
          <Text textAlign="center" color="gray.600">
            © {new Date().getFullYear()} Sriram Gaddam
          </Text>

          <HStack gap={4} justifyContent="center">
            <Link
              href="https://www.linkedin.com/in/sriram-gaddam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip content="LinkedIn">
                <Box
                  as="button"
                  p={2}
                  borderRadius="md"
                  transition="all 0.2s"
                  color="gray.400"
                  _hover={{ color: "blue.500", bg: "gray.800" }}
                  aria-label="LinkedIn"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* @ts-ignore */}
                  <FaLinkedin size={28} />
                </Box>
              </Tooltip>
            </Link>

            <Link
              href="https://github.com/sriramgaddam5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip content="GitHub">
                <Box
                  as="button"
                  p={2}
                  borderRadius="md"
                  transition="all 0.2s"
                  color="gray.400"
                  _hover={{ color: "white", bg: "gray.800" }}
                  aria-label="GitHub"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* @ts-ignore */}
                  <FaGithub size={28} />
                </Box>
              </Tooltip>
            </Link>

            <Link
              href="https://official-itchio.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip content="Official itch.io">
                <Box
                  as="button"
                  p={2}
                  borderRadius="md"
                  transition="all 0.2s"
                  color="gray.400"
                  _hover={{ color: "white", bg: "gray.800" }}
                  aria-label="Official itch.io"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* @ts-ignore */}
                  <FaItchIo size={28} />
                </Box>
              </Tooltip>
            </Link>

            <Link
              href="https://pineapple120.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip content="Pineapple 120 itch.io">
                <Box
                  as="button"
                  p={2}
                  borderRadius="md"
                  transition="all 0.2s"
                  color="gray.400"
                  _hover={{ color: "yellow.500", bg: "gray.800" }}
                  aria-label="Pineapple 120 itch.io"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* @ts-ignore */}
                  <FaItchIo size={28} />
                </Box>
              </Tooltip>
            </Link>

            <Link
              href="https://officialhorizon.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip content="Horizon itch.io">
                <Box
                  as="button"
                  p={2}
                  borderRadius="md"
                  transition="all 0.2s"
                  color="gray.400"
                  _hover={{ color: "blue.500", bg: "gray.800" }}
                  aria-label="Horizon itch.io"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* @ts-ignore */}
                  <FaItchIo size={28} />
                </Box>
              </Tooltip>
            </Link>

            <Link
              href="https://medipeakapps.itch.io/corona-defenders"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip content="Corona Defenders itch.io">
                <Box
                  as="button"
                  p={2}
                  borderRadius="md"
                  transition="all 0.2s"
                  color="gray.400"
                  _hover={{ color: "green.500", bg: "gray.800" }}
                  aria-label="Corona Defenders itch.io"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* @ts-ignore */}
                  <FaItchIo size={28} />
                </Box>
              </Tooltip>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  </Box>
);

export default Layout;
