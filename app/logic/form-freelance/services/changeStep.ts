import { Step } from '../interfaces/Step'
import { firstLetterUppercase } from '../../helpers/firstLetterUppercase'
import { OutputForUiEnum } from '../enum/OutputForUiEnum'

export interface StepHandler {
  handleStep(array: Array<Step>, index?: number): Step | boolean
  handleOutputForUi(input: string): string
}

export class StepHandlerImplementation implements StepHandler {
  /**
   * Pass the array of steps
   * Pass index if you want specific step or none if you do not want specific step and get to first step
   * @param array
   * @param index
   */
  handleStep(array: Array<Step>, index: number = 0): Step {
    if (array[index] === undefined) throw new Error('The step does not exist')
    return array[index]
  }

  handleOutputForUi(input: string): string {
    const output = 'Prest' + firstLetterUppercase(input)
    const values = Object.values(OutputForUiEnum)
    return !values.includes(output as OutputForUiEnum) ? 'Default' : output
  }
}
