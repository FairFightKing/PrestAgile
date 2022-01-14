import { Box, Button, GridItem, Image, Text, WrapItem } from '@chakra-ui/react';
import { GridHomePageProps } from './types/GridHomePageApp';

export const GridCategory = ({
  buttonContent,
  textValue,
  imageSrc,
  fontSize,
  fontFamilly,
  fontWeight,
  lineHeight,
  letterSpacing,
  buttonSize,
  buttonBackground,
  buttonRadius,
  buttonTextColor,
  gridHeight,
  gridWidth,
  gridRadius,
  gridBorder,
  gridBackground,
  gridBoxShadow,
  imageAlt,
  boxBackgroud,
  boxRadiusTop,
  boxTextAlign,
}: GridHomePageProps) => (
  <WrapItem>
    <GridItem
      h={gridHeight}
      w={gridWidth}
      rounded={gridRadius}
      border={gridBorder}
      bg={gridBackground}
      boxShadow={gridBoxShadow}
      overflow="hidden"
    >
      <Image src={imageSrc} zIndex={6} position="relative" alt={imageAlt} />
      <Box
        textAlign={boxTextAlign}
        roundedTop={boxRadiusTop}
        zIndex={7}
        position="relative"
        bg={boxBackgroud}
        p={3}
      >
        <Text
          fontSize={fontSize}
          fontFamily={fontFamilly}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          letterSpacing={letterSpacing}
        >
          {textValue}
        </Text>
        <Button
          mt={4}
          color={buttonTextColor}
          borderRadius={buttonRadius}
          size={buttonSize}
          bg={buttonBackground}
        >
          {buttonContent}
        </Button>
      </Box>
    </GridItem>
  </WrapItem>
);
