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
  SimpleGrid,
  List,
  Code,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

const DipsomaniaPage = () => {
  return (
    <Layout title="DIPSOMANIA | Portfolio">
      <VStack gap={8} alignItems="start" maxW="1200px" mx="auto">
        <Button size="sm" variant="ghost" colorScheme="blue">
          <Link href="/">← Back to Home</Link>
        </Button>

        {/* Hero Section */}
        <Box w="full">
          <HStack mb={3} gap={2}>
            <Badge colorPalette="red">Unity</Badge>
            <Badge colorPalette="red">C#</Badge>
            <Badge colorPalette="red">Photoshop</Badge>
          </HStack>
          <Heading size="4xl" mb={2}>
            DIPSOMANIA
          </Heading>
          <Text fontSize="xl" color="gray.400">
            A 3D bar simulator game
          </Text>
        </Box>

        {/* Cover Image */}
        <Box
          w="full"
          h="500px"
          position="relative"
          bg="gray.900"
          borderRadius="lg"
          overflow="hidden"
          border="2px"
          borderColor="red.500"
        >
          <Image
            src="https://img.itch.zone/aW1nLzI0MTM2NDU5LnBuZw==/original/f8ZcmK.png"
            alt="DIPSOMANIA cover image"
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </Box>

        {/* Overview Section */}
        <Box w="full">
          <Heading size="xl" mb={6}>
            Game Overview
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={4}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Dq8DdFjqghk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
            ></iframe>
            <Box position="relative" w="full" h="400px">
              <Image
                src="https://img.itch.zone/aW1hZ2UvNDA0ODg5OS8yNDMzOTA5NC5qcGc=/794x1000/DRTfiq.jpg"
                alt="Bar overview of DIPSOMANIA with bar counter, tables, and chairs"
                fill
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </Box>
            <Box position="relative" w="full" h="400px">
              <Image
                src="https://img.itch.zone/aW1hZ2UvNDA0ODg5OS8yNDEzNjI5NC5wbmc=/794x1000/hWQDTZ.png"
                alt="Bar tap overview showing fruity, smoky, and sour drink taps"
                fill
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </Box>
            <Box position="relative" w="full" h="400px">
              <Image
                src="https://img.itch.zone/aW1hZ2UvNDA0ODg5OS8yNDEzNjI5NS5wbmc=/794x1000/1JXjWa.png"
                alt="The Goth Banker ragdolling on the floor"
                fill
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </Box>
          </SimpleGrid>

          <Text fontSize="lg" color="gray.300" lineHeight="tall" mt={6} mb={4}>
            You are Jack, a bartender down on his luck and out of money. Your
            banker threatens to shut down your bar, and you have 3 days to clean
            your act up. Better yet, your rival Henry seems to be getting in
            your way. Show him who's boss and save your bar from destruction!
          </Text>
          <List.Root as="ol" ml={6} my={6} gap={4}>
            <List.Item>
              Serve your loyal goth patrons three types of drinks and three
              types of glasses in a fast paced battle against the clock.
            </List.Item>
            <List.Item>
              Relieve your pent up stress by destroying your competitor's bar!
            </List.Item>
            <List.Item>
              Clean up your bar and figure out how to keep your bar from closing
              down.
            </List.Item>
            <List.Item>Get drunk!!</List.Item>
          </List.Root>
        </Box>

        {/* Features Grid */}
        <Box w="full">
          <Heading size="xl" mb={6}>
            Key Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            <Box
              p={6}
              bg="gray.800"
              borderRadius="md"
              border="1px"
              borderColor="gray.700"
            >
              <Heading size="md" mb={3} color="red.400">
                Drink Serving
              </Heading>
              <Text color="gray.300">
                Choose from three types of drinks (
                <Text as="span" color="pink.400">
                  🍓 Fruity
                </Text>
                ,{" "}
                <Text as="span" color="orange.400">
                  🔥 Smoky
                </Text>
                , and{" "}
                <Text as="span" color="yellow.400">
                  🍋 Sour
                </Text>
                ) and three types of glasses (
                <Text as="span" color="blue.400">
                  🍷Brandy
                </Text>
                ,{" "}
                <Text as="span" color="blue.400">
                  🍸 Cocktail
                </Text>
                , and{" "}
                <Text as="span" color="blue.400">
                  🍺Whiskey
                </Text>
                ) to serve your customers.
              </Text>
            </Box>

            <Box
              p={6}
              bg="gray.800"
              borderRadius="md"
              border="1px"
              borderColor="gray.700"
            >
              <Heading size="md" mb={3} color="red.400">
                Bar Management
              </Heading>
              <Text color="gray.300">
                Keep your bar clean and organized by sweeping up broken glass.
                Move chairs and tables back to their original positions.
              </Text>
            </Box>

            <Box
              p={6}
              bg="gray.800"
              borderRadius="md"
              border="1px"
              borderColor="gray.700"
            >
              <Heading size="md" mb={3} color="red.400">
                Keep your Bar Running
              </Heading>
              <Text color="gray.300">
                Fight off rival bar owners (
                <Text as="span" color="red.400">
                  Henry
                </Text>
                ) trying to sabotage your success by trashing their bars!
              </Text>
            </Box>

            <Box
              p={6}
              bg="gray.800"
              borderRadius="md"
              border="1px"
              borderColor="gray.700"
            >
              <Heading size="md" mb={3} color="red.400">
                Race Against the Clock
              </Heading>
              <Text color="gray.300">
                Clean up and serve your customers to keep your bar running
                before the banker shuts down your bar!
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Technical Details */}
        <Box w="full">
          <Heading size="xl" mb={4}>
            Development
          </Heading>
          <Text fontSize="lg" color="gray.300" lineHeight="tall">
            DIPSOMANIA was developed as part of Texas A&M University's
            Visualization Vertical Studio VIST 305. I was the lead developer in
            a team of 6 students. We used Unity and C# with Plastic SCM for
            version control.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} my={8}>
            <Box>
              <Image
                src="/images/Bar prototype.png"
                alt="Bar prototype"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                I started by prototyping the bar and the different elements of
                the bar.
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                One of the first things I worked on was the UI statemachines for
                the angel and devil which represented Henry's moral compass.
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/UI Animation.gif"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>

            <Box>
              <Image
                src="/images/Pickup & Drop Glass.gif"
                alt="Pickup and drop glass animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                I then began working on picking up, placing down, and breaking
                drinks.
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                After getting the new bar layout, I started prototyping the
                cleaning up mechanic where the player cleans up chairs and
                tables. This would reset their position back to their original
                position. Their original positions and rotations are determined
                by the Start() function.
              </Text>
            </Box>
            <Box>
              <Box
                as="pre"
                p={4}
                bg="gray.900"
                borderRadius="md"
                overflow="auto"
                border="1px"
                borderColor="gray.700"
              >
                <Code colorScheme="red" fontSize="sm">
                  {`    void Start()
    {
        originalPosition = transform.position;
        ...
        lastRotation = transform.rotation;
        ...`}
                </Code>
              </Box>
            </Box>

            <Box>
              <Image
                src="/images/Clean Up Mechanic.gif"
                alt="Clean up mechanic animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                The cleaning mechanic in action, resetting furniture to their
                original positions.
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                To switch between the day and night scenes, but wanting for
                objects to persists across scenes. I created a singleton script
                for the map. But before I implemented that, chairs and tables
                would accumulate across scene changes creating a mess.
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/Chair and table mess.png"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box>
              <Box
                as="pre"
                p={4}
                bg="gray.900"
                borderRadius="md"
                overflow="auto"
                border="1px"
                borderColor="gray.700"
              >
                <Code colorScheme="red" fontSize="sm">
                  {`using UnityEngine;
using UnityEngine.SceneManagement;

public class MapManager : MonoBehaviour
{
    private static MapManager instance;
    public static MapManager Instance => instance;

    // Don't destroy on load
    void Awake()
    {
        // Singleton pattern - destroy duplicate instances
        if (instance == null)
        {
            instance = this;
            DontDestroyOnLoad(this.gameObject);
            SceneManager.sceneLoaded += OnSceneLoaded;

            UpdateScale();
        }
        else
        {
            Destroy(gameObject);
        }
    }

    void OnDestroy()
    {
        SceneManager.sceneLoaded -= OnSceneLoaded;
    }

    void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        UpdateScale();
    }
    void UpdateScale()
    ...`}
                </Code>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                I also had to flip the x scale of the map to try to make Jack
                and Henry's bar look different.
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                I had the customers pathfind into the bar and choose a random
                drink according to their preference.
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/Customers in Bar.png"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>

            <Box>
              <Image
                src="/images/Devil dialogue.png"
                alt="Clean up mechanic animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                I also added reading dialogue from .csv file for the angel,
                devil, and customers
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                I also implemented the different possible endings.
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                As well as creating a playtest survey.
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/Playtest Survey.png"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>

            <Box>
              <Image
                src="/images/Bad ending.png"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box>
              <Image
                src="/images/Good ending.png"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box>
              <Image
                src="/images/Very bad ending.png"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                I added interactions such as the piano, divorce papers, wedding
                ring, and potion.
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/Piano.gif"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>

            <Box>
              <Image
                src="/images/Emojis.png"
                alt="Clean up mechanic animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                I also figured out why emojis weren't being rendered properly
                when read from the .csv file. It was because the .ttf (font
                file) didn't have the emoji characters. So using an emoji font
                as a fallback solved the issue.
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                Since having new customer animations, the customer state machine
                was updated to handle the new animations.
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/Customer state machine.png"
                alt="UI Animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>

            <Box>
              <Image
                src="/images/Banker ragdoll.png"
                alt="Clean up mechanic animation"
                width={600}
                height={338}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                Adding a ragdoll for the banker was a lot of fun to work on.
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                Adding Assembly Definitions made the project compile a lot
                faster. This way scripts only recompile when something that they
                reference changes. I really wish I had done this sooner. This
                also has the added benefit of making your code more modular and
                organized.
              </Text>
            </Box>
            <Box
              as="pre"
              p={4}
              bg="gray.900"
              borderRadius="md"
              overflow="auto"
              border="1px"
              borderColor="gray.700"
            >
              <Code colorScheme="red" fontSize="sm">
                {`{
  "name": "GameScripts",
  "rootNamespace": "",
  "references": [
    "Unity.InputSystem",
    "Unity.Cinemachine",
    "Unity.TextMeshPro",
    "Unity.RenderPipelines.Universal.Runtime",
    "Unity.RenderPipelines.Core.Runtime",
    "QuickOutline"
  ],
  "includePlatforms": [],
  "excludePlatforms": [],
  "allowUnsafeCode": false,
  "overrideReferences": false,
  "precompiledReferences": [],
  "autoReferenced": true,
  "defineConstraints": [],
  "versionDefines": [],
  "noEngineReferences": false
}
`}
              </Code>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Conclusion */}
        <Box w="full">
          <Heading size="xl" mb={4}>
            Conclusion
          </Heading>
          <HStack
            gap={6}
            my={8}
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Image
              src="/images/DIPSOMANIA Poster.png"
              alt="DIPSOMANIA Poster"
              width={338}
              height={338}
              style={{ borderRadius: "8px", objectFit: "contain" }}
            />

            <Text fontSize="lg" color="gray.300" lineHeight="tall">
              DIPSOMANIA was a fun project to work on. I learned a lot about the
              important of good UI and UX design. I also learned a lot about the
              importance of good code architecture and design. There are a lot
              of things I would do differently if I were to do it again. For
              example, focusing more on the core mechanics would have been
              better while prototyping. However, I'm still proud of what my team
              was able to do and I'm glad I was able to learn a lot from it.
            </Text>
          </HStack>
        </Box>

        {/* Play Button */}
        <Box w="full" textAlign="center" py={8}>
          <a
            href="https://official-itchio.itch.io/dipsomania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              colorPalette="red"
              size="md"
              fontSize="xl"
              px={4}
              py={6}
              h="auto"
            >
              Play DIPSOMANIA!
            </Button>
          </a>
        </Box>

        <Button size="sm" variant="ghost" colorScheme="blue">
          <Link href="/">← Back to Home</Link>
        </Button>
      </VStack>
    </Layout>
  );
};

export default DipsomaniaPage;
