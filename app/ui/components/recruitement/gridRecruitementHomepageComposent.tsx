import { GridRecruitementHomepageProps } from './types/GridRecruitementHomepageApp';
import { Center, GridItem, Image, Text, WrapItem } from '@chakra-ui/react';

export const GridRecruitement = ({
  imgAlt,
  imgSrc,
  textContentTitle,
  textContent,
}: GridRecruitementHomepageProps) => (
  <WrapItem>
    <GridItem p="4" w="275px" h="100%">
      <Center>
        <Image
          alt={imgAlt}
          src={imgSrc}
          justifyItems="center"
          alignItems="center"
        />
      </Center>
      <Text
        fontSize="3xl"
        py="6"
        fontFamily="Inter"
        fontWeight="600"
        lineHeight="120%"
      >
        {textContentTitle}
      </Text>
      <Text fontSize="xl" fontFamily="Inter" fontWeight="200" lineHeight="160%">
        {textContent}
      </Text>
    </GridItem>
  </WrapItem>
);
