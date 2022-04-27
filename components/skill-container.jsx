import { SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import { GridItemBox } from "./grid-item";
import Section from "./section";

import thumbStyly from "../public/images/avatar.png";
import tmp1 from "../public/images/tmp1.jpg";
import tmp2 from "../public/images/tmp2.jpg";

const SkillContainer = () => {
  return (
    // <SimpleGrid columns={[1, 2, 2]} gap={6}>
    <Wrap spacing="30px" justify="center">
      <WrapItem>
        <Section delay={0.1}>
          <GridItemBox title="Flutter Android/iOS" thumbnail={tmp1} />
        </Section>
      </WrapItem>
      <WrapItem>
        <Section delay={0.4}>
          <GridItemBox title="My Fish workflow" thumbnail={tmp2} />
        </Section>
      </WrapItem>
      <WrapItem>
        <Section delay={0.7}>
          <GridItemBox title="My Fish workflow" thumbnail={tmp2} />
        </Section>
      </WrapItem><WrapItem>
        <Section delay={0.7}>
          <GridItemBox title="My Fish workflow" thumbnail={tmp2} />
        </Section>
      </WrapItem><WrapItem>
        <Section delay={0.7}>
          <GridItemBox title="My Fish workflow" thumbnail={tmp2} />
        </Section>
      </WrapItem><WrapItem>
        <Section delay={0.7}>
          <GridItemBox title="My Fish workflow" thumbnail={tmp2} />
        </Section>
      </WrapItem>
      {/* </SimpleGrid> */}
    </Wrap>
  );
};

export default SkillContainer;
