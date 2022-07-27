import { ValidationSpan } from './ValidationSpan'
import { EmailHelper } from '../../../logic/helpers/emailHelper'
import { Container } from '@chakra-ui/react'
import { specialChar } from '../../../logic/helpers/specialChar'

export const ValidationContainer = ({ data }) => (
  <Container maxW="container.sm'">
    <ValidationSpan
      regex={EmailHelper.emailValidation(data.email)}
      value={
        EmailHelper.emailValidation(data.email)
          ? "L'email est valide"
          : "L'email est invalide"
      }
    />
    <br />
    <ValidationSpan
      context="passwordLength"
      regex={data.password.length >= 8}
      value={
        data.password.length >= 8
          ? 'Le mot de passe fait au moins 8 caractères'
          : 'Le mot de passe doit faire au moins 8 caractères'
      }
    />
    <br />
    <ValidationSpan
      context="passwordCaps"
      regex={/[A-Z]/}
      value={data.password}
    />
    <br />
    <ValidationSpan
      context="passwordSpecialChar"
      regex={specialChar}
      value={data.password}
    />
    <br />
    <ValidationSpan
      context="passwordEven"
      regex={data.password !== '' && data.password === data.confirmPassword}
      value={
        data.password !== '' && data.password === data.confirmPassword
          ? 'Les mots de passe sont identiques'
          : 'Les mots de passe doivent être identiques'
      }
    />
  </Container>
)
