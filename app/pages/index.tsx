import type { NextPage } from 'next'
import { CompetenceRanking } from '../ui/components/competenceRanking'
import { ButtonApp, ButtonGroupApp } from '../ui/components/form/input/input'
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
      <ButtonGroupApp
        children={
          <>
            <ButtonApp
              content="contenu 2"
              isDisable={false}
              left
              colorButton="teal"
              icon={<MdBuild />}
            />
            <ButtonApp
              content="contenu 3"
              isDisable={true}
              left
              colorButton="teal"
              icon={<MdBuild />}
            />
          </>
        }
      />
    </div>
  )
}

export default Home
