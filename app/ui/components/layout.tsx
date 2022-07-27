import Header from './header'
import Footer from './footer'
import { Box } from '@chakra-ui/react'

function Layout({ children }: any) {
  return (
    <Box>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}

export default Layout
