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
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { workExperience } from "../utils/experience-data";
import { getTechColor } from "../utils/tech-colors";

const AboutPage = () => (
  <Layout title="About | Portfolio">
    <VStack gap={8} alignItems="start">
      <Box>
        <Heading mb={4}>About Me</Heading>
        <Text fontSize="lg" color="gray.300" mb={4}>
          I like developing video games and since programming and design often
          go hand in hand when developing video games, I really like the
          combination of art and programming. Aside from programming, I enjoy
          drawing, painting, and playing my electric guitar. I believe that the
          best way to learn is to build something.
        </Text>
        <Text fontSize="lg" color="gray.300">
          I'm current a student at Texas A&M University, studying Visualization
          with experience with both software and game development. On the
          software side, I've used Arduino, Agile, AWS, C#, C++, CSS, Docker,
          HTML, Git, HLSL, Firebase, LLM, Java, Kotlin, JavaScript (Node.js,
          React, TypeScript), Jenkins, Jira, Linux, MongoDB, MySQL, PostgreSQL,
          Python, PyTorch, REST API, Ruby, and Swift. On the more creative side,
          I've used After Effects, Blueprints, Godot, Houdini, Illustrator,
          InDesign, Figma, Maya, Renderman, Substance, Photoshop, Unreal, Unity,
          and ZBrush.
        </Text>
      </Box>

      <Box w="full">
        <Heading size="lg" mb={6}>
          Work Experience
        </Heading>
        <VStack gap={0} alignItems="stretch">
          {workExperience.map((exp, index) => (
            <Box key={exp.id} w="full">
              <Box py={6}>
                <HStack
                  justifyContent="space-between"
                  alignItems="start"
                  mb={3}
                >
                  <HStack gap={4} alignItems="center">
                    <Box
                      w="60px"
                      h="60px"
                      borderRadius="md"
                      overflow="hidden"
                      bg="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Box>
                      <Heading size="md" color="white">
                        {exp.position}
                      </Heading>
                      <Text
                        fontSize="lg"
                        color="blue.400"
                        fontWeight="semibold"
                      >
                        {exp.company}
                      </Text>
                    </Box>
                  </HStack>
                  <Badge colorScheme="green" fontSize="sm" flexShrink={0}>
                    {exp.duration}
                  </Badge>
                </HStack>

                <Text color="gray.300" mb={4}>
                  {exp.description}
                </Text>

                <Box>
                  <HStack gap={2} flexWrap="wrap">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        colorPalette={getTechColor(tech)}
                        variant="outline"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              </Box>
              {index < workExperience.length - 1 && (
                <Box w="full" h="1px" bg="gray.700" />
              )}
            </Box>
          ))}
        </VStack>
      </Box>

      <Button colorScheme="blue">
        <Link href="/">Back to Home</Link>
      </Button>
    </VStack>
  </Layout>
);

export default AboutPage;
