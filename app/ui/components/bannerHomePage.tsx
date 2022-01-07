import { Box, Flex, Button, ButtonGroup, Text, Image } from '@chakra-ui/react';

export default function BannerHomePage() {
  return (
    <Flex bg="grey" h="520px">
      <Box bg="#2945FF" w="50%" color="white">
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
            color="black"
            size="lg"
          >
            <Button py={8} px={12} borderRadius="100px" bg="#FFEEEE">
              Un freelance
            </Button>
            <Button py={8} px={12} borderRadius="100px" bg="#E1DCFF">
              Une mission
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Flex w="50%">
        <Box
          zIndex={7}
          w="100%"
          clipPath="polygon(0% 0%,0% 100%,100% 100%,80% 96.5%,75% 95%,70% 93%,65% 91%,60% 88.5%,55% 85.5%,50% 81.5%,45% 77%,40% 72%,34.5% 65%,31% 60%,25% 51%,20% 42%,15.5% 33%,13.95% 30%,12% 26%,9.75% 21.5%,7.25% 16%,1.5% 4.5%,0.75% 2.5%)"
          h="100%"
          bg="#2945ff"
        />
        <Box
          zIndex={6}
          w="40%"
          h="40%"
          bg="#E1DCFF"
          mx="-100%"
          clipPath="polygon(0% 0%, 10% 40%, 25% 33%, 31% 31%, 38% 30%, 44% 30%, 53% 31%, 63% 31%, 70% 31%, 77% 30%, 88% 25%, 91% 23%, 96% 19%, 98% 15%, 100% 9%, 100% 0%, 87% 0%);"
        />
        <Box
          zIndex={5}
          w="25%"
          h="70%"
          bg="#FFEEEE"
          mx="60%"
          clipPath="polygon(0% 0%, 0% 100%, 100% 100%, 92% 84%, 90% 79%, 89% 72%, 85% 58%, 84% 46%, 84% 42%, 87% 27%, 93% 9%, 100% 0%);"
        />
        <Box mx="-64.15%">
          <Image
            alt="2 personne qui travail ensemble"
            src="bannerHomePagePicture.png"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
