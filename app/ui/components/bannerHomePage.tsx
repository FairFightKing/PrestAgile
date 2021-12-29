import { Box, Flex } from '@chakra-ui/react';

export default function BannerHomePage() {
  return (
    <Flex bg="tomato">
      <Box bg="#2945FF" color="white">
        <Box m={100}>
          <h2
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '3.25rem',
            }}
          >
            Votre expert à
            <br />
            portée de clic
          </h2>
          <p
            style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '1.2rem' }}
          >
            Trouver un expert freelance en agilité ou en gestion
            <br />
            de projet selon vos projet ...
          </p>
        </Box>
        <Box></Box>
      </Box>
    </Flex>
  );
}
