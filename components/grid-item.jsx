import NextLink from "next/link";
import Image from "next/image";
import { Divider, Box, Text, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import  { MinusIcon } from '@chakra-ui/icons'


export const GridItemBox = ({ title, thumbnail }) => (
  <Box w={200}>
    <Box w="100%" textAlign="center">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
    </Box>
    <Box
      w="100%"
      textAlign="center"
      bg="#fff"
      p={3}
      // mt={2}
      className="grid-item-thumbnail"
    >
      <Text fontSize="md">{title}</Text>
    </Box>
  </Box>
);

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);
