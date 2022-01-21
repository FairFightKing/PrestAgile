import { ButtonHomePage } from './buttonHomePage'
import { Box, Button } from '@chakra-ui/react'
import { LinkComponent } from '../navigation/LinkComponent'

export default function TotalButtonHeader() {
  return (
    <Box my={5} mx={10} py={3}>
      <LinkComponent
        target="/test"
        child={
          <Button
            mx={5}
            px={6}
            py={4}
            fontSize="1rem"
            fontWeight="600"
            color="white"
            variant="ghost"
            bg="#2945FF"
            borderRadius="100px"
            size="lg"
          >
            Test
          </Button>
        }
      />
      <LinkComponent
        target="/inscription"
        child={
          <Button
            mx={5}
            px={6}
            py={4}
            fontSize="1rem"
            fontWeight="600"
            color="white"
            variant="ghost"
            bg="#2945FF"
            borderRadius="100px"
            size="lg"
          >
            Inscription
          </Button>
        }
      />
      <LinkComponent
        target="/connexion"
        child={
          <Button
            mx={5}
            px={6}
            py={4}
            fontSize="1rem"
            fontWeight="600"
            color="white"
            variant="ghost"
            bg="#2945FF"
            borderRadius="100px"
            size="lg"
          >
            Connexion
          </Button>
        }
      />
    </Box>
  )
}
