import {
  Box,
  Button,
  GridItem,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
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
          gridBackground="#FFE8E8"
          gridHeight="350px"
          gridWidth="340px"
          gridRadius="20px"
          gridBorder="white 9px solid"
          gridBoxShadow="lg"
          imageAlt="image zeby"
          imageSrc="Gridlistimage.png"
          boxTextAlign="center"
          boxBackgroud="white"
          boxRadiusTop="25px"
          fontWeight="400"
          fontSize="2xl"
          fontFamilly="Inter"
          lineHeight="120%"
          letterSpacing="-1px"
          textValue="Scrum Master"
          buttonTextColor="white"
          buttonBackground="#2945FF"
          buttonSize="lg"
          buttonRadius="100px"
          buttonContent="Découvrir"
        />
        <GridCategory
          gridBackground="#FFE8E8"
          gridHeight="350px"
          gridWidth="340px"
          gridRadius="20px"
          gridBorder="white 9px solid"
          gridBoxShadow="lg"
          imageAlt="image zeby"
          imageSrc="Gridlistimage.png"
          boxTextAlign="center"
          boxBackgroud="white"
          boxRadiusTop="25px"
          fontWeight="400"
          fontSize="2xl"
          fontFamilly="Inter"
          lineHeight="120%"
          letterSpacing="-1px"
          textValue="Scrum Master"
          buttonTextColor="white"
          buttonBackground="#2945FF"
          buttonSize="lg"
          buttonRadius="100px"
          buttonContent="Découvrir"
        />
        <GridCategory
          gridBackground="#FFE8E8"
          gridHeight="350px"
          gridWidth="340px"
          gridRadius="20px"
          gridBorder="white 9px solid"
          gridBoxShadow="lg"
          imageAlt="image zeby"
          imageSrc="Gridlistimage.png"
          boxTextAlign="center"
          boxBackgroud="white"
          boxRadiusTop="25px"
          fontWeight="400"
          fontSize="2xl"
          fontFamilly="Inter"
          lineHeight="120%"
          letterSpacing="-1px"
          textValue="Scrum Master"
          buttonTextColor="white"
          buttonBackground="#2945FF"
          buttonSize="lg"
          buttonRadius="100px"
          buttonContent="Découvrir"
        />
        <GridCategory
          gridBackground="#FFE8E8"
          gridHeight="350px"
          gridWidth="340px"
          gridRadius="20px"
          gridBorder="white 9px solid"
          gridBoxShadow="lg"
          imageAlt="image zeby"
          imageSrc="Gridlistimage.png"
          boxTextAlign="center"
          boxBackgroud="white"
          boxRadiusTop="25px"
          fontWeight="400"
          fontSize="2xl"
          fontFamilly="Inter"
          lineHeight="120%"
          letterSpacing="-1px"
          textValue="Scrum Master"
          buttonTextColor="white"
          buttonBackground="#2945FF"
          buttonSize="lg"
          buttonRadius="100px"
          buttonContent="Découvrir"
        />
        <GridCategory
          gridBackground="#FFE8E8"
          gridHeight="350px"
          gridWidth="340px"
          gridRadius="20px"
          gridBorder="white 9px solid"
          gridBoxShadow="lg"
          imageAlt="image zeby"
          imageSrc="Gridlistimage.png"
          boxTextAlign="center"
          boxBackgroud="white"
          boxRadiusTop="25px"
          fontWeight="400"
          fontSize="2xl"
          fontFamilly="Inter"
          lineHeight="120%"
          letterSpacing="-1px"
          textValue="Scrum Master"
          buttonTextColor="white"
          buttonBackground="#2945FF"
          buttonSize="lg"
          buttonRadius="100px"
          buttonContent="Découvrir"
        />
      </Wrap>
    </Box>
  );
}
