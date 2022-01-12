import {
  Box,
  Center,
  GridItem,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
export default function RecruitementHomePage() {
  return (
    <Box mt={20} textAlign="center" h="auto">
      <Text
        fontSize="4xl"
        my={4}
        fontFamily="Inter"
        fontWeight="600"
        lineHeight="120%"
        letterSpacing="-1px"
      >
        Des recrutements externes rapides et sécurisés
      </Text>
      <Text fontSize="lg" fontFamily="Inter" fontWeight="200" lineHeight="160%">
        Raptus habenas ducunt ad vigil.Sunt particulaes resuscitabo teres,
        regius lactaes.
      </Text>
      <Box mt={10}>
        <Wrap
          spacing="10rem"
          h="21rem"
          width="75%"
          justify="center"
          height="100%"
          m="auto"
        >
          <WrapItem>
            <GridItem p="4" w="275px" h="100%">
              <Center>
                <Image
                  alt="quelqu'un devant un téléphone"
                  src="recruitement-image-1.png"
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
                1. Discover
              </Text>
              <Text
                fontSize="xl"
                fontFamily="Inter"
                fontWeight="200"
                lineHeight="160%"
              >
                Trouver facilement des compétences pointues pour vos projets et
                contactez
              </Text>
            </GridItem>
          </WrapItem>
          <WrapItem>
            <GridItem p="4" w="275px" h="100%">
              <Center>
                <Image
                  alt="quelqu'un devant de la nouriture"
                  src="recruitement-image-2.png"
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
                2. Copy & Paste
              </Text>
              <Text
                fontSize="xl"
                fontFamily="Inter"
                fontWeight="200"
                lineHeight="160%"
              >
                Travaillez main dans la main : décidez ensemble des modalités de
                la mission puis collaborez en direct
              </Text>
            </GridItem>
          </WrapItem>
          <WrapItem>
            <GridItem p="4" w="275px" h="100%">
              <Center>
                <Image
                  alt="quelqu'un jouant de la guitare"
                  src="recruitement-image-3.png"
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
                3. Export & Share
              </Text>
              <Text
                fontSize="xl"
                fontFamily="Inter"
                fontWeight="200"
                lineHeight="160%"
              >
                Recommencez. La mission est terminée? Débloquez le paiement en
                un clic et partez à la recherche de votre prochain talent
              </Text>
            </GridItem>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
}
