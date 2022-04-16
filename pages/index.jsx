import { Box, Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const Index = () => (
  <Layout>
    <Container maxW="container.md" pt={14}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        // bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m a full-stack developer based in Japan!
      </Box>
    </Container>
  </Layout>
);

export default Index;
