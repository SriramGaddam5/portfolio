import { Heading, HStack, Text } from "@chakra-ui/react";

function Error() {
  return (
    <div>
      <Heading p="30px">Error</Heading>
      <HStack p="30px" spacing="5px">
        <Text color="red.500">{window.location.pathname}</Text>
        <Text>not found</Text>
      </HStack>
    </div>
  );
}

export default Error;
