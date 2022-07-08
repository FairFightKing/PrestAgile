import { Box, GridItem, Image, WrapItem } from '@chakra-ui/react'
import { GridHomePageProps } from './types/GridHomePageApp'
import { ButtonHomePage } from '../buttonHomePage/buttonHomePage'
import { TextHomePage } from '../textHomePage/textHomePage'

export const GridCategory = ({
  imageSrc,
  imageAlt,
  textContentOverride,
}: GridHomePageProps) => (
  <WrapItem>
    <GridItem
      h="350px"
      w="340px"
      rounded="20px"
      border="white 9px solid"
      bg="#FFE8E8"
      boxShadow="lg"
      overflow="hidden"
    >
      <Image src={imageSrc} zIndex={6} position="relative" alt={imageAlt} />
      <Box
        textAlign="center"
        roundedTop="25px"
        zIndex={7}
        position="relative"
        bg="white"
        p={3}
      >
        <TextHomePage
          fontSize="2xl"
          fontFamily="Inter"
          fontWeight="400"
          lineHeight="120%"
          letterSpacing="-1px"
          textContent={textContentOverride}
        />
        <ButtonHomePage
          buttonContent="Découvrir"
          buttonSize="lg"
          buttonBackground="#2945FF"
          buttonMarginT="4"
          buttonRadius="100px"
          buttonTextColor="white"
        />
      </Box>
    </GridItem>
  </WrapItem>
)
