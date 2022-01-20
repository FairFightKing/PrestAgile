import { Box, Text } from '@chakra-ui/react';
import TotalGridCategory from './totalGridCategoryHomePage';

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
      <TotalGridCategory />
    </Box>
  );
}
