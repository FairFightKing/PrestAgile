import { Step } from '../interfaces/Step'
import { firstLetterUppercase } from '../../helpers/firstLetterUppercase'

export interface StepHandler {
  changeStep(array: Array<Step>, index?: number): Step | boolean

  handleOutputForUi(input: string): string
}

export class StepHandlerImplementation implements StepHandler {
  changeStep(array: Array<Step>, index?: number): Step {
    if (index === undefined) return array[0]
    if (array[index] === undefined) throw new Error('The step does not exist')
    return array[index]
  }

  handleOutputForUi(input: string): string {
    return 'Prest' + firstLetterUppercase(input)
  }
}
