import { Stack, Box } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Presentation from "../components/Presentation";
import SkillContainer from "../components/skill-container";

const Index = () => (
  <Layout>
    {/* <Container
      display="flex"
      
      pt={14}
      maxW="full"
      wrap="wrap"
      // align="center"
      justify="space-between"
    > */}
    <Box mt={{ md: 100 }}>
      <Stack spacing={0} direction={{ base: "column", md: "row" }}>
        <Box flex={1} mt={{ md: 8 }} mb={20} align="center">
          <Presentation></Presentation>
        </Box>
        <Box flex={1} mt={{ md: 4 }} align="center">
          <SkillContainer></SkillContainer>
        </Box>
      </Stack>
    </Box>
    {/* </Container> */}
  </Layout>
);

export default Index;
