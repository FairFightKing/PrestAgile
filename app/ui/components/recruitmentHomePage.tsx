import { Box, Text, Wrap } from '@chakra-ui/react'
import { GridRecruitement } from './recruitement/gridRecruitementHomepageComponent'

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
          spacing={{ base: '5', md: '6', lg: '10rem' }}
          h="21rem"
          width="75%"
          justify="center"
          height="100%"
          m="auto"
        >
          <GridRecruitement
            imgAlt="un homme devant un téléphone"
            imgSrc="recruitement-image-1.png"
            textContentTitle="1. Discover"
            textContent="Trouver facilement des compétences pointues pour vos projets et
                contactez"
          />
          <GridRecruitement
            imgAlt="un homme sur un tabouret"
            imgSrc="recruitement-image-2.png"
            textContentTitle="2. Copy & Paste"
            textContent="Travaillez main dans la main : décidez ensemble des modalités de
                la mission puis collaborez en direct"
          />
          <GridRecruitement
            imgAlt="un homme jouant de la guitare"
            imgSrc="recruitement-image-3.png"
            textContentTitle="3. Export & Share"
            textContent="Recommencez. La mission est terminée? Débloquez le paiement en
                un clic et partez à la recherche de votre prochain talent"
          />
        </Wrap>
      </Box>
    </Box>
  )
}
