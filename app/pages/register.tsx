import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Container, useToast } from '@chakra-ui/react'
import FormRegister from '../ui/components/register/FormRegister'
import Router, { useRouter } from 'next/router'
import { HttpRequests } from '../logic/common/methods/httpRequests/HttpRequests'
import { PopulationEnum } from '../logic/common/enum/Population'
import { HandleUrlImplementation } from '../logic/form-freelance/services/handleUrl'

const Home: NextPage = ({ stepTitle }) => {
  const [error, setError] = useState(false)
  const [formRegisterValue, setRegisterFormValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  })
  const router = useRouter()

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
    router.push('form-freelance/' + stepTitle)
    /**
     *
     * const cloneUserBasic = (({ confirmPassword, firstName, lastName, ...o }) =>
     *       o)(formRegisterValue)
     *     const cloneUserInfo = (({ email, password, confirmPassword, ...o }) => o)(
     *       formRegisterValue,
     *     )
     *     if (!RegistrationServicesImpl.checkInputForApi(cloneUserBasic)) {
     *       setError(true)
     *       setTitle('early exit')
     *       return false
     *     }
     *     RegistrationServicesImpl.sendDataToApi({
     *       ...cloneUserBasic,
     *       userInfo: {
     *         ...cloneUserInfo,
     *       },
     *     })
     *       .then(() => {
     *         toast({
     *           title: 'Compte créer',
     *           description: 'Votre compte à bien été créer',
     *           status: 'success',
     *           duration: 9000,
     *           isClosable: true,
     *         })
     *       })
     *       .catch(_ => {
     *         return setError(true)
     *       })
     */
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

export async function getServerSideProps(req) {
  const { handleHyphen } = new HandleUrlImplementation()
  const { data } = await HttpRequests.getHttpRequest(
    'strapi',
    'form-freelance',
    PopulationEnum.deep,
  )
  const stepTitle = handleHyphen(data.data.attributes.steps[0].title)
  return { props: { stepTitle } }
}
