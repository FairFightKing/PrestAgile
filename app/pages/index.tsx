import type { NextPage } from 'next'
import { CompetenceRanking } from '../ui/components/competenceRanking'
import {
  ButtonApp,
  TextApp,
  ButtonGroupApp,
  CheckboxApp,
  Autocomplete,
  NumberInputApp,
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
      <ButtonGroupApp
        children={
          <>
            <ButtonApp
              content="contenu 2"
              isDisable={false}
              left
              colorButton="red"
              icon={<MdBuild />}
            />
            <ButtonApp
              content="contenu 3"
              isDisable={true}
              left
              colorButton="blue"
              icon={<MdBuild />}
            />
          </>
        }
      />
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
      <br />
      <NumberInputApp minimum={10} maximum={15} steps={0.5} valueDefault={10} />
      <br />
    </div>
  )
}

export default Home
