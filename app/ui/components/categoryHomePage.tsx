import { Box, Text, Wrap } from '@chakra-ui/react';
import { GridCategory } from './category/gridCategoryHomepage';

export default function CategoryHomePage() {
  return (
    <Box my="8rem" textAlign="center" h="auto">
      <Text
        my="5rem"
        fontSize="4xl"
        fontFamily="Inter"
        fontWeight="700"
        lineHeight="120%"
        letterSpacing="-1px"
      >
        Les principales catégories de métiers
      </Text>
      <Wrap
        spacing="5rem"
        h="21rem"
        width="85%"
        justify="center"
        height="100%"
        m="auto"
      >
        <GridCategory
          imageAlt="Homme faisant un signe de main"
          imageSrc="Gridlistimage.png"
          textContentOverride="Scrum Master"
        />
        <GridCategory
          imageAlt="Homme faisant un signe de main"
          imageSrc="Gridlistimage.png"
          textContentOverride="Scrum Master"
        />
        <GridCategory
          imageAlt="Homme faisant un signe de main"
          imageSrc="Gridlistimage.png"
          textContentOverride="Scrum Master"
        />
        <GridCategory
          imageAlt="Homme faisant un signe de main"
          imageSrc="Gridlistimage.png"
          textContentOverride="Scrum Master"
        />
        <GridCategory
          imageAlt="Homme faisant un signe de main"
          imageSrc="Gridlistimage.png"
          textContentOverride="Scrum Master"
        />
      </Wrap>
    </Box>
  );
}
