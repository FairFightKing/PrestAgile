import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ValidationContainer } from '../ui/components/register/ValidationContainer'
import { Input } from '@chakra-ui/input'
import { Button, Container, Heading, Text, useToast } from '@chakra-ui/react'
import { RegistrationServicesImpl } from '../logic/registration/services/registrationServicesImpl'
import FormRegister from '../ui/components/register/FormRegister'

const Home: NextPage = () => {
  const [error, setError] = useState(false)
  const [formRegisterValue, setRegisterFormValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  })

  const [title, setTitle] = useState('Defaut')

  const toast = useToast()
  useEffect(() => {
    error &&
      toast({
        title: title,
        description: 'Réessayez ultèrieurement',
        status: 'error',
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => setError(false),
      })
  }, [error])

  function handleSubmit(e) {
    e.preventDefault()
    const cloneUserBasic = (({ confirmPassword, firstName, lastName, ...o }) =>
      o)(formRegisterValue)
    const cloneUserInfo = (({ email, password, confirmPassword, ...o }) => o)(
      formRegisterValue,
    )
    // @ts-ignore
    if (!RegistrationServicesImpl.checkInputForApi(cloneUserBasic)) {
      setError(true)
      setTitle('early exit')
      return false
    }
    // @ts-ignore
    RegistrationServicesImpl.sendDataToApi({
      ...cloneUserBasic,
      userInfo: {
        ...cloneUserInfo,
      },
    })
      .then(() => {
        toast({
          title: 'Compte créer',
          description: 'Votre compte à bien été créer',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch(_ => {
        return setError(true)
      })
  }

  return (
    <Container maxW="container.md">
      <FormRegister
        submit={handleSubmit}
        data={formRegisterValue}
        change={({ target }) =>
          setRegisterFormValue({
            ...formRegisterValue,
            // @ts-ignore
            [target.id]: target.value,
          })
        }
      />
    </Container>
  )
}

export default Home
