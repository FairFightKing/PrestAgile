import {Step} from "../interfaces/Step";

export interface StepGeneratorInterface {
    changeStep(value: number, array: Array<Object>): Step | Error;
}

export class StepGeneratorImplementation implements StepGeneratorInterface {
    changeStep = (value, array): Step => {
        if(array.steps[value].id === undefined) throw new Error("The index of the step is undefined")
        let step = array.steps[value]
        return {
            id: step.id,
            title: step.title,
            description: step.description,
            inputs: [...step.inputs]
        }
    }
}
