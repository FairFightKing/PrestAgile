import HeaderNoConnection from './headerNoConnection'
import Footer from './footer'

function Layout({ children }: any) {
  return (
    <>
      <HeaderNoConnection />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
