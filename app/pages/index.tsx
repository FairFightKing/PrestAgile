import type { NextPage } from 'next'
import { CompetenceRanking } from '../ui/components/competenceRanking'
import {
  ButtonApp,
  TextApp,
  ButtonGroupApp,
  CheckboxApp,
  Autocomplete,
  GroupTextApp,
} from '../ui/components/form/input/input'
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
      <ButtonGroupApp>
        <>
          <ButtonApp
            content="contenu 2"
            isDisable={false}
            left
            colorButton="red"
            icon={<MdBuild />}
          />
          <ButtonApp
            content="contenu"
            isDisable={true}
            left
            colorButton="blue"
            icon={<MdBuild />}
          />
        </>
      </ButtonGroupApp>
      <br />
      <CheckboxApp
        isDisable={false}
        colorCheckbox="red"
        checkboxName="test"
        checkboxValue="test"
        content="test checkbox"
      />
      <br />
      <Autocomplete data={[{ title: 'ouais' }]} />
      <GroupTextApp placeholder="Cuck" />
    </div>
  )
}

export default Home
