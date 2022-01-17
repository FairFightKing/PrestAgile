import { Heading, Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { ValidationContainer } from './ValidationContainer';

export default function FormLogin({ submit, change, data }) {
  return (
    <form onSubmit={submit} onChange={change}>
      <Heading size="xl" m="1rem 0">
        Connexion
      </Heading>
      <Text as="label" htmlFor="email">
        Entrez votre email
      </Text>
      <Input type="text" id="email" />
      <Text as="label" htmlFor="password">
        Entrez votre mot de passe
      </Text>
      <Input type="text" id="password" />
      <Text as="label" htmlFor="submission" />
      <Input
        fontSize="1rem"
        mt="1rem"
        backgroundColor="#2945FF"
        color="white"
        width="50%"
        type="submit"
        value="Connexion"
      />
    </form>
  );
}
