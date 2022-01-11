import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useEditable } from '@chakra-ui/react';
import { RegistrationInput } from '../logic/registration/services/registrationServices';
import { EmailHelper } from '../logic/helpers/emailHelper';

const Home: NextPage = () => {
  const [formRegisterValue, setRegisterFormValue] = useState({
    email: '',
    password: '',
  });

  const setValues = ({ target }) => {
    setRegisterFormValue({
      ...formRegisterValue,
      [target.type]: target.value,
    });
  };

  return (
    <div>
      <form action="" onChange={setValues}>
        {
          <>
            <span>
              {EmailHelper.emailValidation(formRegisterValue.email)
                ? "L'email est valide"
                : "L'email est invalide"}
            </span>
            <br />
            <span>
              Le mot de passe{' '}
              {formRegisterValue.password.length >= 8 ? 'fait' : 'doit faire'}{' '}
              au moins 8 caractères{' '}
            </span>
            <br />
            <span>
              Le mot de passe{' '}
              {/[A-Z]/.test(formRegisterValue.password)
                ? 'possède'
                : 'doit posséder'}{' '}
              une majuscule
            </span>
            <br />
            <span>
              Le mot de passe{' '}
              {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
                formRegisterValue.password,
              )
                ? 'contient'
                : 'doit contenir'}{' '}
              un caractère spécial
            </span>
            <br />
          </>
        }
        <br />
        <label htmlFor="email">Entrez votre email</label>
        <br />
        <input type="email" autoComplete="invalid" />
        <br />
        <label htmlFor="email">Entrez votre mot de passe</label>
        <br />
        <input type="password" autoComplete="invalid" />
      </form>
    </div>
  );
};

export default Home;
