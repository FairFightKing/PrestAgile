import {
  Box,
  Center,
  GridItem,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { GridRecruitement } from './recruitement/gridRecruitementHomepage';

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
          <GridRecruitement
            gridPadding="4"
            gridWidth="275px"
            gridHeight="100%"
            imgAlt="quelqu'un devant son téléphone"
            imgSrc="recruitement-image-1.png"
            imgJustifyItems="center"
            imgAlignItems="center"
            textTitleFontSize="3xl"
            textTitleFontFamily="Inter"
            textTitleFontWeight="600"
            textTitleLineHeight="120%"
            textTitlePaddingY="6"
            textContentTitle="1. Discover"
            textFontSize="xl"
            textFontFamily="Inter"
            textFontWeight="200"
            textLineHeight="160%"
            textContent="Trouver facilement des compétences pointues pour vos projets et
                contactez"
          />
          <GridRecruitement
            gridPadding="4"
            gridWidth="275px"
            gridHeight="100%"
            imgAlt="quelqu'un devant de la nouriture"
            imgSrc="recruitement-image-2.png"
            imgJustifyItems="center"
            imgAlignItems="center"
            textTitleFontSize="3xl"
            textTitleFontFamily="Inter"
            textTitleFontWeight="600"
            textTitleLineHeight="120%"
            textTitlePaddingY="6"
            textContentTitle="2. Copy & Paste"
            textFontSize="xl"
            textFontFamily="Inter"
            textFontWeight="200"
            textLineHeight="160%"
            textContent="Travaillez main dans la main : décidez ensemble des modalités de
                la mission puis collaborez en direct"
          />
          <GridRecruitement
            gridPadding="4"
            gridWidth="275px"
            gridHeight="100%"
            imgAlt="quelqu'un jouant de la guitare"
            imgSrc="recruitement-image-3.png"
            imgJustifyItems="center"
            imgAlignItems="center"
            textTitleFontSize="3xl"
            textTitleFontFamily="Inter"
            textTitleFontWeight="600"
            textTitleLineHeight="120%"
            textTitlePaddingY="6"
            textContentTitle="3. Export & Share"
            textFontSize="xl"
            textFontFamily="Inter"
            textFontWeight="200"
            textLineHeight="160%"
            textContent="Recommencez. La mission est terminée? Débloquez le paiement en
                un clic et partez à la recherche de votre prochain talent"
          />
        </Wrap>
      </Box>
    </Box>
  );
}
