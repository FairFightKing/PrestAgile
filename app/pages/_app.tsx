import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../ui/components/layout'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
