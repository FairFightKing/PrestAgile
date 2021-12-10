import type { NextPage } from 'next'
import styled from 'styled-components'
import Layout from '../ui/components/layout'
import { CompetenceRanking } from '../ui/components/competenceRanking'

const Home: NextPage = () => {
  return (
    <div>
      <CompetenceRanking ranking={1} />
      <br />
    </div>
  )
}

export default Home
