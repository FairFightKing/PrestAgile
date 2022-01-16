import { GridRecruitementHomepageProps } from './types/GridRecruitementHomepageApp';
import { Center, GridItem, Image, Text, WrapItem } from '@chakra-ui/react';

export const GridRecruitement = ({
  gridPadding,
  gridHeight,
  gridWidth,
  imgAlignItems,
  imgAlt,
  imgJustifyItems,
  imgSrc,
  textContentTitle,
  textTitleFontFamily,
  textTitleFontSize,
  textTitleFontWeight,
  textTitleLineHeight,
  textTitlePaddingY,
  textLineHeight,
  textFontWeight,
  textFontFamily,
  textFontSize,
  textContent,
}: GridRecruitementHomepageProps) => (
  <WrapItem>
    <GridItem p={gridPadding} w={gridWidth} h={gridHeight}>
      <Center>
        <Image
          alt={imgAlt}
          src={imgSrc}
          justifyItems={imgJustifyItems}
          alignItems={imgAlignItems}
        />
      </Center>
      <Text
        fontSize={textTitleFontSize}
        py={textTitlePaddingY}
        fontFamily={textTitleFontFamily}
        fontWeight={textTitleFontWeight}
        lineHeight={textTitleLineHeight}
      >
        {textContentTitle}
      </Text>
      <Text
        fontSize={textFontSize}
        fontFamily={textFontFamily}
        fontWeight={textFontWeight}
        lineHeight={textLineHeight}
      >
        {textContent}
      </Text>
    </GridItem>
  </WrapItem>
);
