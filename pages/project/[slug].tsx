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
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { projects } from "../../utils/projects-data";
import { getTechColor } from "../../utils/tech-colors";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") {
    return (
      <Layout title="Loading...">
        <Text>Loading...</Text>
      </Layout>
    );
  }

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <VStack gap={4}>
          <Heading>Project Not Found</Heading>
          <Button colorScheme="blue">
            <Link href="/">Back to Home</Link>
          </Button>
        </VStack>
      </Layout>
    );
  }

  return (
    <Layout title={`${project.title} | Portfolio`}>
      <VStack gap={6} alignItems="start" maxW="900px" mx="auto">
        <Button size="sm" variant="ghost" colorScheme="blue">
          <Link href="/">← Back to Home</Link>
        </Button>

        <Box w="full">
          <HStack mb={3} gap={2} flexWrap="wrap">
            {project.technologies.map((tech, index) => (
              <Badge key={index} colorPalette={getTechColor(tech)}>
                {tech}
              </Badge>
            ))}
          </HStack>
          <Heading size="2xl" mb={4}>
            {project.title}
          </Heading>
        </Box>

        <Box
          w="full"
          h="400px"
          position="relative"
          bg="gray.900"
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            src={project.coverImage}
            alt={`${project.title} cover image`}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </Box>

        <Box w="full">
          <Heading size="lg" mb={3}>
            About This Project
          </Heading>
          <Text fontSize="lg" color="gray.300" mb={6} lineHeight="tall">
            {project.description}
          </Text>

          <HStack gap={4}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button colorScheme={project.colorScheme} variant="solid">
                  View Project
                </Button>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme={project.colorScheme} variant="outline">
                  View on GitHub
                </Button>
              </a>
            )}
          </HStack>
        </Box>

        <Button size="sm" variant="ghost" colorScheme="blue">
          <Link href="/">← Back to Home</Link>
        </Button>
      </VStack>
    </Layout>
  );
};

export default ProjectPage;
