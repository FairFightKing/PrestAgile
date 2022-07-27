import PrestText from '../components/PrestInputs/PrestText'
import PrestTel from '../../ui/components/PrestInputs/PrestTel'
import PrestCheckbox from '../../ui/components/PrestInputs/PrestCheckbox'
import PrestDate from '../../ui/components/PrestInputs/PrestDate'
import PrestFile from '../../ui/components/PrestInputs/PrestFile'
import PrestRadio from '../../ui/components/PrestInputs/PrestRadio'
import PrestTextarea from '../components/PrestInputs/PrestTextarea'
import PrestSelect from '../components/PrestInputs/PrestSelect'

export default function renderInputs(input) {
  const { type } = input
  if ('text' === type) {
    return <PrestText props={input}></PrestText>
  }
  if ('tel' === type) {
    return <PrestTel props={input}></PrestTel>
  }
  if ('file' === type) {
    return <PrestFile props={input}></PrestFile>
  }
  if ('radio' === type) {
    return <PrestRadio props={input}></PrestRadio>
  }
  if ('date' === type) {
    return <PrestDate props={input}></PrestDate>
  }
  if ('textarea' === type) {
    return <PrestTextarea props={input}></PrestTextarea>
  }
  if ('select' === type) {
    return <PrestSelect props={input}></PrestSelect>
  }
  return <PrestCheckbox props={input}></PrestCheckbox>
}
