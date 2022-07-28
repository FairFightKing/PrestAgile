import PrestText from '../components/PrestInputs/PrestText'
import PrestTel from '../components/PrestInputs/PrestTel'
import PrestDate from '../components/PrestInputs/PrestDate'
import PrestFile from '../components/PrestInputs/PrestFile'
import PrestRadio from '../components/PrestInputs/PrestRadio'
import PrestTextarea from '../components/PrestInputs/PrestTextarea'
import PrestSelect from '../components/PrestInputs/PrestSelect'
import { getBackendUrl } from '../../logic/helpers/getBackendUrl'

export default function renderInputs(input, context) {
  const { type } = input
  if ('text' === type) {
    // @ts-ignore
    return <PrestText props={input} ctx={context}></PrestText>
  }
  if ('tel' === type) {
    // @ts-ignore
    return <PrestTel props={input} ctx={context}></PrestTel>
  }
  if ('file' === type) {
    // @ts-ignore
    return <PrestFile props={input} ctx={context}></PrestFile>
  }
  if ('radio' === type) {
    // @ts-ignore
    return <PrestRadio props={input} ctx={context}></PrestRadio>
  }
  if ('date' === type) {
    // @ts-ignore
    return <PrestDate props={input} ctx={context}></PrestDate>
  }
  if ('textarea' === type) {
    // @ts-ignore
    return <PrestTextarea props={input} ctx={context}></PrestTextarea>
  }
  // @ts-ignore
  return <PrestSelect props={input} ctx={context}></PrestSelect>
}
