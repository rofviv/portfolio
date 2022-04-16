import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f1f4f6", "#191b1f")(props),
    },
  }),
};

// const fonts = {
//   heading: "'Montserrat'"
// }

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles });

export default theme;
