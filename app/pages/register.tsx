import type { NextPage } from 'next';
import { useState } from 'react';
import { EmailHelper } from '../logic/helpers/emailHelper';
import { ValidationSpan } from '../ui/components/register/ValidationSpan';
import { Badge } from '@chakra-ui/react';

const Home: NextPage = () => {
  const [formRegisterValue, setRegisterFormValue] = useState({
    email: '',
    password: '',
  });

  // @ts-ignore
  return (
    <div>
      {
        <>
          <ValidationSpan
            regex={EmailHelper.emailValidation(formRegisterValue.email)}
            value={
              EmailHelper.emailValidation(formRegisterValue.email)
                ? "L'email est valide"
                : "L'email est invalide"
            }
          />
          <br />
          <ValidationSpan
            context="passwordLength"
            regex={formRegisterValue.password.length >= 8}
            value={
              formRegisterValue.password.length >= 8
                ? 'Le mot de passe fait au moins 8 caractères'
                : 'Le mot de passe doit faire au moins 8 caractères'
            }
          />
          <br />
          <ValidationSpan
            context="passwordCaps"
            regex={/[A-Z]/}
            value={formRegisterValue.password}
          />
          <br />
          <ValidationSpan
            context="passwordSpecialChar"
            regex={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}
            value={formRegisterValue.password}
          />
        </>
      }

      <form
        action=""
        onChange={({ target }) =>
          setRegisterFormValue({
            ...formRegisterValue,
            // @ts-ignore
            [target.type]: target.value,
          })
        }
      >
        <br />
        <label htmlFor="email"> Entrez votre email</label>
        <br />
        <input type="email" autoComplete="invalid" />
        <br />
        <label htmlFor="email">Entrez votre mot de passe</label>
        <br />
        <input type="password" autoComplete="invalid" />
        <br />
        <label htmlFor="submission" />
        <br />
        <input type="submit" value="Valider mon inscription" />
      </form>
    </div>
  );
};

export default Home;
