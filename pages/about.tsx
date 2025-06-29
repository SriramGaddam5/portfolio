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
          I like creating video games with Godot, Unity, and Unreal Engine.
          Programming and design often go hand in hand when developing video
          games. I believe that the best way to learn is to build something.
        </Text>
        <Text fontSize="lg" color="gray.300">
          I'm current a student at Texas A&M University, studying Visualization
          with experience with both software and game development. On the
          software side, I've used Arduino, AWS, C#, C++, CSS, HTML, Git, Figma,
          LLM, Java, Kotlin, JavaScript (React, TypeScript), Linux, Python, and
          PyTorch. On the design side, I've used After Effects, Houdini,
          Illustrator, Figma, Maya, Renderman, Substance, Photoshop, Unreal, and
          Unity.
        </Text>
      </Box>

      <Box w="full">
        <Heading size="lg" mb={6}>
          Work Experience
        </Heading>
        <VStack gap={6} alignItems="stretch">
          {workExperience.map((exp) => (
            <Box
              key={exp.id}
              bg="gray.800"
              border="1px"
              borderColor="gray.700"
              borderRadius="md"
              p={6}
            >
              <HStack justifyContent="space-between" alignItems="start" mb={3}>
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
                    <Text fontSize="lg" color="blue.400" fontWeight="semibold">
                      {exp.company}
                    </Text>
                  </Box>
                </HStack>
                <Badge colorScheme="green" fontSize="sm">
                  {exp.duration}
                </Badge>
              </HStack>

              <Text color="gray.300" mb={4}>
                {exp.description}
              </Text>

              <Box mb={4}>
                <Text fontWeight="semibold" color="white" mb={2}>
                  Technologies:
                </Text>
                <HStack gap={2} flexWrap="wrap">
                  {exp.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      colorPalette={getTechColor(tech)}
                      variant="outline"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>
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
