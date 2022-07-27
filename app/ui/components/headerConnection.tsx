import { Box, Flex, Spacer, Image, Text, Button } from '@chakra-ui/react'
import { LinkComponent } from './navigation/LinkComponent'

export default function HeaderNoConnection() {
  return (
    <Flex fontFamily="Inter" height="auto" width="100%">
      <Box textAlign="center" py={4} px={5}>
        <LinkComponent
          child={
            <Box px={5}>
              <Image alt="Logo Prestagile" src="PA-logo.png" />
              <Text fontSize="lg" fontWeight="600">
                Prestagile
              </Text>
            </Box>
          }
          target="/"
        />
      </Box>
      <Spacer />
      <Flex my={5}>
        <Button
          mx={5}
          my={{ base: '2', md: '0', lg: '0' }}
          py={4}
          fontSize="15px"
          fontWeight={600}
          px={6}
          size="lg"
          borderRadius="100px"
        >
          Tableau de bord
        </Button>
        <Button
          mx={5}
          my={{ base: '2', md: '0', lg: '0' }}
          py={4}
          fontSize="15px"
          fontWeight={600}
          px={6}
          borderRadius="100px"
          size="lg"
        >
          Mes missions
        </Button>
        <Box mx={3}>
          <Flex>
            <Image src="avatar.svg" width="45px" mx={3} />
            <Box>
              <b>Allan Germe</b>
              <br />
              Mon profil
            </Box>
          </Flex>
        </Box>
        <Button
          mx={5}
          my={{ base: '2', md: '0', lg: '0' }}
          py={4}
          fontSize="15px"
          fontWeight={600}
          px={6}
          size="lg"
          borderRadius="100px"
          bg="#642EFF"
          color="white"
        >
          Déconexion
        </Button>
      </Flex>
    </Flex>
  )
}
