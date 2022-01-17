import { Heading, Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { ValidationContainer } from './ValidationContainer';

export default function FormRegister({ submit, change, data }) {
  return (
    <form onSubmit={submit} onChange={change}>
      <Heading size="xl" m="1rem 0">
        Valide ton inscription
      </Heading>
      <Text as="label" htmlFor="firstName">
        Entrez votre prénom
      </Text>
      <Input type="text" id="firstName" />
      <Text as="label" htmlFor="lastName">
        Entrez votre nom
      </Text>
      <Input type="text" id="lastName" />
      <Text as="label" htmlFor="email">
        Entrez votre email
      </Text>
      <Input type="text" id="email" />
      <Text as="label" htmlFor="password">
        Entrez votre mot de passe
      </Text>
      <Input type="password" id="password" />
      <Text as="label" htmlFor="confirmPassword">
        Confirmez votre mot de passe
      </Text>
      <Input m="0 0 1rem 0" type="password" id="confirmPassword" />
      <br />
      <ValidationContainer data={data} />
      <br />
      <Text as="label" htmlFor="submission" />
      <Input
        mt="1rem"
        fontSize="1rem"
        backgroundColor="#2945FF"
        color="white"
        width="50%"
        type="submit"
        value="Valider mon inscription"
      />
    </form>
  );
}
