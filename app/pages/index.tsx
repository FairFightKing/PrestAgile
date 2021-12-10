import type { NextPage } from 'next'
import styled from 'styled-components'
import Layout from '../ui/components/layout'
import { CompetenceRanking } from '../ui/components/competenceRanking'
import { ButtonApp, TextApp } from '../ui/components/form/input/input'
import { MdBuild } from 'react-icons/md'

const Home: NextPage = () => {
  return (
    <div>
      <br />
      <CompetenceRanking ranking={2} />
      <br />
      <ButtonApp
        content="contenu"
        isDisable={false}
        left
        colorButton="teal"
        icon={<MdBuild />}
      />
      <br />
      <TextApp placeholder="YEP" />
      <br />
    </div>
  )
}

export default Home
