import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Badge,
  HStack,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { projects } from "../utils/projects-data";
import { getTechColor } from "../utils/tech-colors";

const WorkPage = () => (
  <Layout title="Work | Portfolio">
    <VStack gap={8} alignItems="start">
      <Box>
        <Heading mb={4}>My Work</Heading>
        <Text fontSize="lg" color="gray.300">
          Here are some of the projects I've worked on.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
        {projects.map((project) => (
          <Box
            key={project.id}
            bg="gray.800"
            border="1px"
            borderColor="gray.700"
            borderRadius="md"
            overflow="hidden"
          >
            <Box
              w="full"
              h="200px"
              position="relative"
              bg="gray.900"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={project.coverImage}
                alt={`${project.title} cover image`}
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </Box>

            <Box p={6}>
              <Box mb={4}>
                <Heading size="md">{project.title}</Heading>
                <HStack mt={2} gap={2}>
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} colorPalette={getTechColor(tech)}>
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>
              <Text mb={4}>{project.description}</Text>
              <HStack gap={2}>
                {project.link && (
                  <Button
                    size="sm"
                    colorScheme={project.colorScheme}
                    variant="outline"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button
                    size="sm"
                    colorScheme={project.colorScheme}
                    variant="ghost"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                )}
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Button colorScheme="blue">
        <Link href="/">Back to Home</Link>
      </Button>
    </VStack>
  </Layout>
);

export default WorkPage;
