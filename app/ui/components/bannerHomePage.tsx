import { Box, Flex, Button, ButtonGroup, Text, Image } from '@chakra-ui/react';

export default function BannerHomePage() {
  return (
    <Flex bg="grey" w="100%">
      <Box bg="#2945FF" w="100%" color="white">
        <Box my={75} ml={125}>
          <Text
            lineHeight="120%"
            my={2}
            fontFamily="Inter"
            letterSpacing="-1px"
            fontWeight="500"
            fontSize="64px"
          >
            Votre expert à
            <br />
            portée de clic
          </Text>
          <Text
            pt={5}
            lineHeight="120%"
            fontFamily="Inter"
            fontWeight="400"
            letterSpacing="-1px"
            fontSize="24px"
          >
            Trouver un expert freelance en agilité ou en gestion
            <br />
            de projet selon vos projet ...
          </Text>
          <ButtonGroup
            mt={10}
            letterSpacing="-1px"
            spacing="3.5rem"
            variant="solid"
          >
            <Button
              color="black"
              py={8}
              px={12}
              borderRadius="100px"
              bg="#FFEEEE"
              size="lg"
            >
              Un freelance
            </Button>
            <Button
              color="black"
              py={8}
              px={12}
              borderRadius="100px"
              bg="#E1DCFF"
              size="lg"
            >
              Une mission
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Box className="test"></Box>
    </Flex>
  );
}
