import type { NextPage } from 'next'
import { Link } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/register">Register</Link>
    </div>
  )
}

export default Home
