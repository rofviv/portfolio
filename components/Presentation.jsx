import {
  HStack,
  Stack,
  Heading,
  Box,
  Text,
  chakra,
  Center,
  Divider,
  Circle,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Image from "next/image";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Presentation = () => {
  return (
    <Box align="left">
      <Heading as="h2" size="xl" pb={1}>
        Hola, yo soy
      </Heading>
      <Heading as="h2" size="3xl" pb={1}>
        Roy Favio
      </Heading>
      <Heading as="h2" size="xl" pb={6}>
        Desarrollador FullStack
      </Heading>
      <Stack direction={{ base: "column", md: "row" }}>
        <Box align="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
        <Center height="100px" px={4} display={{ base: "none", md: "flex" }}>
          <Divider orientation="vertical" />
        </Center>
        <Box pt={{ base: 4, md: 0 }}>
          <Text fontSize="lg">
            Aplicaciones móviles
            <br />
            Aplicaciones web
            <br />
            Desarrollo backend
          </Text>
        </Box>
      </Stack>
      <HStack mt={8} spacing="50px">
        <LinkBox cursor="pointer">
          <Circle
            className={useColorModeValue("linkLight", "linkDark")}
            size="40px"
            bg="white"
            color="black"
          >
            <LinkOverlay
              href="https://www.google.com"
              target="_blank"
              isExternal
            >
              <EmailIcon />
            </LinkOverlay>
          </Circle>
        </LinkBox>
        <Circle size="40px" bg="white" color="black">
          <FaGithub />
        </Circle>
        <Circle size="40px" bg="white" color="black">
          <FaGitlab />
        </Circle>
        <Circle size="40px" bg="white" color="black">
          <FaLinkedinIn />
        </Circle>
      </HStack>
    </Box>
  );
};

export default Presentation;
