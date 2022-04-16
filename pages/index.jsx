import { Stack, Box, Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Presentation from "../components/Presentation";

const Index = () => (
  <Layout>
    {/* <Container
      display="flex"
      p={0}
      pt={14}
      maxW="full"
      wrap="wrap"
      // align="center"
      justify="space-between"
    > */}
      <Stack pt={14} spacing={8} direction={{ base: "column", md: "row" }} >
        <Box flex={1}>
          <Presentation></Presentation>
        </Box>
        <Box flex={1}>
          <Presentation></Presentation>
        </Box>
      </Stack>
    {/* </Container> */}
  </Layout>
);

export default Index;
