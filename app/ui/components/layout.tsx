import Header from './header'
import Footer from './footer'
import { Box, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { FormContext } from '../../logic/context/Context'
import axios from 'axios'

function Layout({ children }: any) {
  const [form, setForm] = useState({})
  const toast = useToast()

  async function sendForm() {
    const data = {
      data: {
        inputResult: [],
      },
    }
    Object.entries(form).map(el => {
      data.data.inputResult.push({
        // @ts-ignore
        value: el[1],
        // @ts-ignore
        keys_form: +el[0],
      })
    })
    const res = await axios.post(
      process.env.NEXT_PUBLIC_STRAPI_URL + '/api/form-freelance-results',
      {
        ...data,
      },
    )
    if (res.status === 200) {
      toast({
        title: 'Formulaire soumis.',
        description: 'Nous avons bien reçu votre formulaire !',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      <Header />
      <FormContext.Provider
        value={{
          state: form,
          setState: setForm,
          sendForm: sendForm,
        }}
      >
        <main>{children}</main>
      </FormContext.Provider>
      <Footer />
    </Box>
  )
}

export default Layout
