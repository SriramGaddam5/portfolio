import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
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
  Input,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { projects } from "../utils/projects-data";
import { getTechColor } from "../utils/tech-colors";

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on search query and selected technology
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTech =
        selectedTech === null || project.technologies.includes(selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  return (
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
          <Heading size="3xl" mb={6}>
            My Work
          </Heading>

          {/* Search Box */}
          <Input
            placeholder="Search projects by name, description, or technology..."
            size="lg"
            mb={4}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="gray.800"
            borderColor="gray.700"
            _hover={{ borderColor: "blue.500" }}
            _focus={{
              borderColor: "blue.500",
              boxShadow: "0 0 0 1px blue.500",
            }}
          />

          {/* Technology Filters */}
          <HStack gap={2} mb={6} flexWrap="wrap">
            <Button
              size="sm"
              variant={selectedTech === null ? "solid" : "outline"}
              colorScheme="blue"
              onClick={() => setSelectedTech(null)}
            >
              All
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                size="sm"
                variant={selectedTech === tech ? "solid" : "outline"}
                colorScheme={getTechColor(tech)}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </Button>
            ))}
          </HStack>

          {/* Results Count */}
          <Text color="gray.400" mb={4}>
            Showing {filteredProjects.length} of {projects.length} projects
          </Text>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            gap={6}
            w="full"
          >
            {[...filteredProjects].reverse().map((project) => (
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

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <Box textAlign="center" py={12}>
              <Text fontSize="xl" color="gray.400" mb={2}>
                No projects found
              </Text>
              <Text color="gray.500">
                Try adjusting your search or filter criteria
              </Text>
              <Button
                mt={4}
                colorScheme="blue"
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTech(null);
                }}
              >
                Clear Filters
              </Button>
            </Box>
          )}
        </Box>
      </VStack>
    </Layout>
  );
};

export default IndexPage;
