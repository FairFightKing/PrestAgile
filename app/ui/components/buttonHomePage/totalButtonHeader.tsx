import { ButtonHomePage } from './buttonHomePage'
import { Box, Button } from '@chakra-ui/react'
import { LinkComponent } from '../navigation/LinkComponent'

export default function TotalButtonHeader() {
  return (
    <Box my={5} mx={{ base: '0', md: '0', lg: '10' }} py={3}>
      <LinkComponent
        target="/login"
        child={
          <Button
            mx={5}
            my={{ base: '2', md: '0', lg: '0' }}
            py={4}
            fontSize="15px"
            fontWeight={600}
            px={6}
            size="lg"
            borderRadius="100px"
            bg="#FFEEEE"
          >
            Connexion
          </Button>
        }
      />
      <LinkComponent
        target="/register"
        child={
          <Button
            mx={5}
            my={{ base: '2', md: '0', lg: '0' }}
            py={4}
            fontSize="15px"
            fontWeight={600}
            px={6}
            size="lg"
            borderRadius="100px"
            bg="#2945FF"
            color="white"
          >
            Inscription
          </Button>
        }
      />
    </Box>
  )
}
