import { LinkComponent } from './navigation/LinkComponent'
import { Container } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export default function Header() {
  return (
    <Container style={{ background: 'red' }}>
      <Text>Prestagile</Text>
      <Container>
        <LinkComponent
          target="/test"
          child={<Button colorScheme="teal">Test</Button>}
        />
      </Container>
    </Container>
  )
}
