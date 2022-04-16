import {
  Container,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LinkItem from "./link-item";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

const MyDrawer = ({ path }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const path = path;
  // console.log(path);
  return (
    <>
      <IconButton
        // key={useColorModeValue("light", "dark")}
        // aria-label="Dark Mode"
        // colorScheme={useColorModeValue("linkedin", "orange")}
        // icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={() => onOpen()}
        icon={<HamburgerIcon />}
      ></IconButton>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader p={2}>
            <Container
              p={0}
              display="flex"
              // p={2}
              maxW="full"
              // w="100%"
              wrap="wrap"
              // align="center"
              justify="space-between"
            >
              <Box flex={1} pt={1.5}>
                <Logo onClick={() => onClose()} />
              </Box>
              <Box flex={1} align="right">
                <IconButton onClick={() => onClose()} icon={<CloseIcon />} />
              </Box>
            </Container>
          </DrawerHeader>
          <DrawerBody p={2}>
            <Box align="center" pt={8}>
              <Stack direction={{ base: "column" }}>
                {/* <motion.div
                  // style={{ display: "inline-block" }}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                > */}
                <LinkItem href="/" path={path} onClick={() => onClose()}>
                  Inicio
                </LinkItem>
                {/* </motion.div> */}
                {/* <motion.div
                  // style={{ display: "inline-block" }}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                > */}
                <LinkItem href="/works" path={path} onClick={() => onClose()}>
                  Trabajos
                </LinkItem>
                {/* </motion.div> */}
                {/* <motion.div
                  // style={{ display: "inline-block" }}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.9 }}
                > */}
                <LinkItem href="/skills" path={path} onClick={() => onClose()}>
                  Habilidades
                </LinkItem>
                {/* </motion.div> */}
                {/* <motion.div
                  // style={{ display: "inline-block" }}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                > */}
                <LinkItem href="/about" path={path} onClick={() => onClose()}>
                  Acerca de
                </LinkItem>
                {/* </motion.div> */}
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
