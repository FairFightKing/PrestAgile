import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Container, useToast } from '@chakra-ui/react'

import FormLogin from '../ui/components/register/FormLogin'
import axios from 'axios'
import Router from 'next/router'

const Home: NextPage = () => {
  const [error, setError] = useState(false)
  const [formLoginValue, setLoginFormValue] = useState({
    email: '',
    password: '',
  })

  const toast = useToast()
  useEffect(() => {
    error &&
      toast({
        title: 'Mauvais identifiants',
        description: "Merci d'entrer des identifiants valides",
        status: 'error',
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => setError(false),
      })
  }, [error])

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:8000/api/auth/login', formLoginValue)
      .then(_ => Router.push('/'))
      .catch(_ => setError(true))
  }

  return (
    <Container maxW="container.md">
      <FormLogin
        submit={handleSubmit}
        data={formLoginValue}
        change={({ target }) =>
          setLoginFormValue({
            ...formLoginValue,
            // @ts-ignore
            [target.id]: target.value,
          })
        }
      />
    </Container>
  )
}

export default Home
