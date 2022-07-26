import PrestText from '../components/PrestInputs/PrestText'
import PrestTel from '../../ui/components/PrestInputs/PrestTel'
import PrestCheckbox from '../../ui/components/PrestInputs/PrestCheckbox'
import PrestDate from '../../ui/components/PrestInputs/PrestDate'
import PrestFile from '../../ui/components/PrestInputs/PrestFile'
import PrestRadio from '../../ui/components/PrestInputs/PrestRadio'
import PrestTextarea from '../../ui/components/PrestInputs/PrestTextarea'
import Components from '@chakra-ui/theme/src/components'

export default function renderInputs(input, key) {
  const { type } = input
  if (type === 'text') {
    return <PrestText key={key} label={input.label}></PrestText>
  }
}
