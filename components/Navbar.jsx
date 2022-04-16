import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import { IoLogoGithub } from "react-icons/io5";
import DarkModeBtn from "./dark-mode-btn";
import Logo from "./Logo";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const activeColor = useColorModeValue("#fff", "#000");
  const activeBgColor = useColorModeValue("#00a0dc", "#fbd38d");

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        color={active ? activeColor : undefined}
        bg={active ? activeBgColor : undefined}
        target={target}
        {...props}
        className={
          !active ? useColorModeValue("linkLight", "linkDark") : undefined
        }
      >
        {children}
      </Link>
    </NextLink>
  );
};

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
            {/* <LinkItem
            target="_blank"
            href="https://github.com/craftzdog/craftzdog-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem> */}
          </Stack>
        </Box>

        <Box flex={1} align="right">
          <DarkModeBtn />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Inicio</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Trabajos</MenuItem>
                </NextLink>
                <NextLink href="/skills" passHref>
                  <MenuItem as={Link}>Habilidades</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>Acerca de</MenuItem>
                </NextLink>
                {/* <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
