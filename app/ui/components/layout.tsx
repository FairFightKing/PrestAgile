import HeaderNoConnection from './headerNoConnection'
import HeaderConnection from './headerConnection'
import Footer from './footer'

function Layout({ children }: any) {
  return (
    <>
      <HeaderNoConnection />
      <HeaderConnection />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
