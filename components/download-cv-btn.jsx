import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
// import { MdDownload } from "react-icons/md"

const DownloadCVBtn = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      key={useColorModeValue("light", "dark")}
      aria-label="Dark Mode"
      colorScheme={useColorModeValue("linkedin", "orange")}
      leftIcon={<DownloadIcon />}
      size='sm'
      // onClick={toggleColorMode}
    >
      Download CV
    </Button>
  );
};

export default DownloadCVBtn;
