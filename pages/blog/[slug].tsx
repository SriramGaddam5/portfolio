import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Badge,
  HStack,
  List,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import HowToGetJobContent from "../../components/HowToGetJobContent";
import BlogProgressBar from "../../components/BlogProgressBar";

// This would typically come from a CMS or database
const blogPostsData: Record<string, any> = {
  "how-to-get-a-job-in-tech": {
    title: "How to Get a Job in Tech",
    date: "August 1, 2024",
    tags: ["Career", "Advice", "Tech", "Internships"],
    isFullHTML: true,
    readingTime: 8,
  },
};

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") {
    return (
      <Layout title="Loading...">
        <Text>Loading...</Text>
      </Layout>
    );
  }

  const post = blogPostsData[slug];

  if (!post) {
    return (
      <Layout title="Post Not Found">
        <VStack gap={4}>
          <Heading>Post Not Found</Heading>
          <Button colorScheme="blue">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </VStack>
      </Layout>
    );
  }

  // Special handling for "how-to-get-a-job-in-tech" post
  if (slug === "how-to-get-a-job-in-tech") {
    return (
      <Layout title={`${post.title} | Blog`}>
        <BlogProgressBar />
        <VStack gap={6} alignItems="start" maxW="900px" mx="auto">
          <Button size="sm" variant="ghost" colorScheme="blue">
            <Link href="/blog">← Back to Blog</Link>
          </Button>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
          >
            <img
              src="https://pyxis.nymag.com/v1/imgs/37e/828/1e2a2943b3871f23576937330a0fbdd9f6-squidward.rsquare.w400.jpg"
              alt="Squidward looking out his window with Spongebob and Patrick having fun outside"
              height="400"
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "0.5rem",
                marginTop: "1rem",
                borderRadius: "8px",
              }}
            />
            <Text
              textAlign="center"
              color="gray.500"
              fontSize="0.9rem"
              fontStyle="italic"
              mb={12}
            >
              Squidward isn&apos;t but you can be happy like Spongebob and
              Patrick
            </Text>
          </Box>

          <Box>
            <HStack mb={2} gap={2}>
              {post.tags.map((tag: string, index: number) => (
                <Badge key={index} colorScheme="purple" variant="outline">
                  {tag}
                </Badge>
              ))}
            </HStack>
            <Heading size="4xl" mb={2}>
              {post.title}
            </Heading>
            <Text color="gray.400" fontSize="sm">
              {post.date} · {post.readingTime} min read
            </Text>
          </Box>

          <HowToGetJobContent />

          <Button size="sm" variant="ghost" colorScheme="blue">
            <Link href="/blog">← Back to Blog</Link>
          </Button>
        </VStack>
      </Layout>
    );
  }

  return (
    <Layout title={`${post.title} | Blog`}>
      <BlogProgressBar />
      <VStack gap={6} alignItems="start" maxW="800px" mx="auto">
        <Button size="sm" variant="ghost" colorScheme="blue">
          <Link href="/blog">← Back to Blog</Link>
        </Button>

        <Box>
          <HStack mb={2} gap={2}>
            {post.tags.map((tag: string, index: number) => (
              <Badge key={index} colorScheme="purple" variant="outline">
                {tag}
              </Badge>
            ))}
          </HStack>
          <Heading size="2xl" mb={2}>
            {post.title}
          </Heading>
          <Text color="gray.400" fontSize="sm">
            {post.date} · {post.readingTime} min read
          </Text>
        </Box>

        <Box
          w="full"
          color="gray.300"
          css={{
            "& h1": {
              fontSize: "2xl",
              fontWeight: "bold",
              marginTop: 6,
              marginBottom: 3,
            },
            "& h2": {
              fontSize: "xl",
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 2,
            },
            "& h3": {
              fontSize: "lg",
              fontWeight: "semibold",
              marginTop: 4,
              marginBottom: 2,
            },
            "& p": { marginBottom: 4, lineHeight: "1.7" },
            "& ul, & ol": { marginLeft: 6, marginBottom: 4 },
            "& li": { marginBottom: 2 },
            "& code": {
              background: "gray.800",
              paddingLeft: 1,
              paddingRight: 1,
              paddingTop: 0.5,
              paddingBottom: 0.5,
              borderRadius: "sm",
              fontSize: "sm",
            },
          }}
        >
          {post.content.split("\n").map((line: string, index: number) => {
            if (line.startsWith("# ")) {
              return (
                <Heading key={index} as="h1" size="2xl" mt={6} mb={3}>
                  {line.replace("# ", "")}
                </Heading>
              );
            } else if (line.startsWith("## ")) {
              return (
                <Heading key={index} as="h2" size="xl" mt={5} mb={2}>
                  {line.replace("## ", "")}
                </Heading>
              );
            } else if (line.startsWith("### ")) {
              return (
                <Heading key={index} as="h3" size="lg" mt={4} mb={2}>
                  {line.replace("### ", "")}
                </Heading>
              );
            } else if (line.trim() === "") {
              return <Box key={index} h={2} />;
            } else {
              return (
                <Text key={index} mb={2} lineHeight="1.7">
                  {line}
                </Text>
              );
            }
          })}
        </Box>

        <Button size="sm" variant="ghost" colorScheme="blue">
          <Link href="/blog">← Back to Blog</Link>
        </Button>
      </VStack>
    </Layout>
  );
};

export default BlogPostPage;
