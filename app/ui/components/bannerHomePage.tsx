import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  Text,
  Image,
  useMediaQuery,
} from '@chakra-ui/react'

export default function BannerHomePage() {
  return (
    <Flex h={{ base: '425px', md: '520px', lg: '520px' }}>
      <Box
        bg="#2945FF"
        w={{ base: '100%', md: '60%', lg: '50%' }}
        color="white"
      >
        <Box
          my={{ base: '5%', md: '7.5%', lg: '7.5%' }}
          ml="20%"
          mr={{ base: '20%', md: '1', lg: '0' }}
        >
          <Text
            lineHeight="120%"
            my="2%"
            fontFamily="Inter"
            letterSpacing="-1px"
            fontWeight="500"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
          >
            Votre expert à
            <br />
            portée de clic
          </Text>
          <Text
            px={{ base: '2', md: '1', lg: '0' }}
            pt="4"
            lineHeight="120%"
            fontFamily="Inter"
            fontWeight="400"
            letterSpacing="-1px"
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          >
            Trouver un expert freelance en agilité ou en gestion
            <br />
            de projet selon vos projet ...
          </Text>
          <ButtonGroup
            display={{ base: 'block', md: 'block', lg: 'flex' }}
            mt={{ base: '5%', md: '7.5%', lg: '10%' }}
            letterSpacing="-1px"
            spacing={{ base: '0', md: '0', lg: '3.5rem' }}
            variant="solid"
            color="black"
            size="lg"
          >
            <Button py={8} my={1} px={12} borderRadius="100px" bg="#FFEEEE">
              Un freelance
            </Button>
            <Button py={8} my={1} px={12} borderRadius="100px" bg="#E1DCFF">
              Une mission
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Box
        w={{ base: '0', md: '50%', lg: '50%' }}
        position="static"
        top="0px"
        left="0px"
      >
        <Box
          position="relative"
          top="0px"
          left="0px"
          zIndex={7}
          w="100%"
          clipPath="polygon(0% 0%,0% 100%,100% 100%,80% 96.5%,75% 95%,70% 93%,65% 91%,60% 88.5%,55% 85.5%,50% 81.5%,45% 77%,40% 72%,34.5% 65%,31% 60%,25% 51%,20% 42%,15.5% 33%,13.95% 30%,12% 26%,9.75% 21.5%,7.25% 16%,1.5% 4.5%,0.75% 2.5%)"
          h="100%"
          bg="#2945ff"
        />
        <Box
          zIndex={6}
          position="relative"
          w="40%"
          h="40%"
          bg="#E1DCFF"
          top="-520px"
          left="0px"
          clipPath="polygon(0% 0%, 10% 40%, 25% 33%, 31% 31%, 38% 30%, 44% 30%, 53% 31%, 63% 31%, 70% 31%, 77% 30%, 88% 25%, 91% 23%, 96% 19%, 98% 15%, 100% 9%, 100% 0%, 87% 0%);"
        />
        <Box
          zIndex={5}
          w="25%"
          h="70%"
          bg="#FFEEEE"
          position="relative"
          top="-680px"
          left="0px"
          clipPath="polygon(0% 0%, 0% 100%, 100% 100%, 92% 84%, 90% 79%, 89% 72%, 85% 58%, 84% 46%, 84% 42%, 87% 27%, 93% 9%, 100% 0%);"
        />
        <Image
          height="100%"
          objectFit="cover"
          position="relative"
          top="-1092px"
          left="0px"
          alt="2 personnes qui travaillent ensemble"
          src="bannerHomePagePicture.png"
        />
      </Box>
    </Flex>
  )
}
