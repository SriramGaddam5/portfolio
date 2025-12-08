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
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { projects } from "../utils/projects-data";
import { getTechColor } from "../utils/tech-colors";

const IndexPage = () => (
  <Layout title="Portfolio | Home">
    <VStack gap={8} alignItems="start">
      <Box>
        <Heading size="6xl" mb={4}>
          Hi, I'm Sriram Gaddam
        </Heading>
        <Heading size="3xl" mb={4}>
          I am a technical artist{" "}
          <Text ml={2} as="span" fontStyle="italic" color="blue.500">
            I like developing games
          </Text>
        </Heading>
      </Box>

      <Box w="full">
        <Heading size="lg" mb={6}>
          My Work
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6} w="full">
          {[...projects].reverse().map((project) => (
            <LinkBox
              key={project.id}
              as={Box}
              bg="gray.800"
              border="1px"
              borderColor="gray.700"
              borderRadius="md"
              overflow="hidden"
              cursor="pointer"
              _hover={{
                borderColor: "blue.500",
                transition: "all 0.2s",
                transform: "translateY(-2px)",
              }}
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
                  style={{ objectFit: "contain" }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </Box>

              <Box p={6}>
                <Box mb={4}>
                  <LinkOverlay as={Link} href={`/project/${project.slug}`}>
                    <Heading size="md">{project.title}</Heading>
                  </LinkOverlay>
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
            </LinkBox>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  </Layout>
);

export default IndexPage;
