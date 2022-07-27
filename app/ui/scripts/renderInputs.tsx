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
  if (type === 'text') {
    return <PrestText props={input}></PrestText>
  }
  if (type === 'tel') {
    return <PrestTel props={input}></PrestTel>
  }
  if (type === 'file') {
    return <PrestFile props={input}></PrestFile>
  }
  if (type === 'radio') {
    return <PrestRadio props={input}></PrestRadio>
  }
  if (type === 'date') {
    return <PrestDate props={input}></PrestDate>
  }
  if (type === 'textarea') {
    return <PrestTextarea props={input}></PrestTextarea>
  }
  if (type === 'select') {
    return <PrestSelect props={input}></PrestSelect>
  }
  return <PrestCheckbox props={input}></PrestCheckbox>
}
