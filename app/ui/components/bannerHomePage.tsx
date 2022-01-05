import { Box, Flex, Button, ButtonGroup } from '@chakra-ui/react';

export default function BannerHomePage() {
  return (
    <Flex bg="tomato" w="100%">
      <Box bg="#2945FF" w="50%" color="white">
        <Box my={75} ml={125}>
          <h2
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '4rem',
              margin: '2rem 0',
            }}
          >
            Votre expert à
            <br />
            portée de clic
          </h2>
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 200,
              fontSize: '1.75rem',
            }}
          >
            Trouver un expert freelance en agilité ou en gestion
            <br />
            de projet selon vos projet ...
          </p>
          <ButtonGroup mt={10} spacing="3.5rem" variant="solid">
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
        <Box></Box>
      </Box>
    </Flex>
  );
}
