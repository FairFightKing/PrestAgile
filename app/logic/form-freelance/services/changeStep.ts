import {Step} from '../interfaces/Step'
import {Input} from "../interfaces/Input";
import {Form} from "../interfaces/Form";

export interface StepGeneratorInterface {
    changeStep(array: Array<Step>, index?: number): Step | boolean
}

export class StepGeneratorImplementation implements StepGeneratorInterface {
    changeStep(array: Array<Step>, index?: number): Step  {
        if (index === undefined) return array[0]
        if (array[index] === undefined) throw new Error('The step does not exist')
        return array[index]
    }
}
