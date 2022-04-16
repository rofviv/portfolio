import NextLink from "next/link";
import {
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const LinkItem = ({ href, path, target, children, ...props }) => {
  let active = path === href;
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

export default LinkItem;
