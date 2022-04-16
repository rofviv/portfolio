import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import DarkModeBtn from "./dark-mode-btn";
import Logo from "./Logo";
import MyDrawer from "./drawer";
import LinkItem from "./link-item";

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff00", "#20202300")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
      pt={{ md: 3 }}
      px={{ md: 8 }}
    >
      <Container
        display="flex"
        p={2}
        maxW="full"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Box flex={1} align="right" pt={1.5}>
          <Flex align="center">
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              <Logo />
            </Heading>
          </Flex>
        </Box>

        <Box align="center">
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
          >
            <LinkItem href="/" path={path}>
              Inicio
            </LinkItem>
            <LinkItem href="/works" path={path}>
              Trabajos
            </LinkItem>
            <LinkItem href="/skills" path={path}>
              Habilidades
            </LinkItem>
            <LinkItem href="/about" path={path}>
              Acerca de
            </LinkItem>
          </Stack>
        </Box>

        <Box flex={1} align="right">
          <DarkModeBtn />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <MyDrawer path={path} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
