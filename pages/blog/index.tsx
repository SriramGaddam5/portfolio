import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { blogPosts } from "../../utils/blog-data";

const BlogPage = () => (
  <Layout title="Blog | Portfolio">
    <VStack gap={8} alignItems="start">
      <Box>
        <Heading mb={4}>Blog</Heading>
        <Text fontSize="lg" color="gray.300">
          Thoughts on game development, programming, and design.
        </Text>
      </Box>

      <VStack gap={6} w="full" alignItems="stretch">
        {blogPosts.map((post) => (
          <LinkBox
            key={post.id}
            as={Box}
            borderWidth="1px"
            borderColor="gray.700"
            borderRadius="md"
            p={6}
            cursor="pointer"
            _hover={{
              borderColor: "blue.500",
              transition: "all 0.2s",
              transform: "translateY(-2px)",
            }}
          >
            <HStack gap={6} alignItems="start">
              <Box
                flexShrink={0}
                width="200px"
                height="150px"
                position="relative"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <VStack alignItems="start" flex={1} gap={3}>
                <HStack justifyContent="space-between" w="full">
                  <LinkOverlay as={Link} href={`/blog/${post.slug}`}>
                    <Heading size="lg" color="white">
                      {post.title}
                    </Heading>
                  </LinkOverlay>
                  <Badge colorScheme="blue" fontSize="sm" flexShrink={0}>
                    {post.date}
                  </Badge>
                </HStack>

                <Text color="gray.300">{post.excerpt}</Text>

                <HStack gap={2} flexWrap="wrap">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} colorPalette="blue" variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </HStack>

                <Text mt={5} color="blue.400" fontSize="sm" fontWeight="medium">
                  Read More
                </Text>
              </VStack>
            </HStack>
          </LinkBox>
        ))}
      </VStack>

      <Button colorScheme="blue">
        <Link href="/">Back to Home</Link>
      </Button>
    </VStack>
  </Layout>
);

export default BlogPage;
