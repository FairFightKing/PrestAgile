import type { NextPage } from 'next';
import { useState } from 'react';
import { ValidationContainer } from '../ui/components/register/ValidationContainer';
import { Input } from '@chakra-ui/input';
import { Button, Container, Heading, Text, useToast } from '@chakra-ui/react';
import { RegistrationServicesImpl } from '../logic/registration/services/registrationServices';

const Home: NextPage = () => {
  const [formRegisterValue, setRegisterFormValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  const toast = useToast();
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const cloneUserBasic = (({ confirmPassword, firstName, lastName, ...o }) =>
      o)(formRegisterValue);
    const cloneUserInfo = (({ email, password, confirmPassword, ...o }) => o)(
      formRegisterValue,
    );
    console.log(cloneUserBasic, cloneUserInfo);
    if (!RegistrationServicesImpl.checkInputForApi(cloneUserBasic))
      return setError("Le mot de passe n'est pas valide");
    RegistrationServicesImpl.sendDataToApi({
      ...cloneUserBasic,
      userInfo: {
        ...cloneUserInfo,
      },
    })
      .then(() => {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(error => {
        toast({
          title: 'Erreur lors de la création du compte.',
          description: "L'email associé existe déjà.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  }

  return (
    <Container maxW="container.md">
      <form
        onSubmit={handleSubmit}
        onChange={({ target }) =>
          setRegisterFormValue({
            ...formRegisterValue,
            // @ts-ignore
            [target.id]: target.value,
          })
        }
      >
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
        <ValidationContainer data={formRegisterValue} />
        <br />
        <Text as="label" htmlFor="submission" />
        <Input
          fontSize="1rem"
          backgroundColor="#2945FF"
          color="white"
          width="50%"
          type="submit"
          value="Valider mon inscription"
        />
      </form>
    </Container>
  );
};

export default Home;
