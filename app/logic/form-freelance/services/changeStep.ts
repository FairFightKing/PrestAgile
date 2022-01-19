import {Step} from "../interfaces/Step";

export interface StepGeneratorInterface {
    changeStep(value: number, array: Array<Object>): Step | Error;
}

export class StepGeneratorImplementation implements StepGeneratorInterface {
    changeStep = (value, array): Step => {
        if(array.steps.data[value].id === undefined) throw new Error("The index of the step is undefined")
        let step = array.steps.data[value]
        return {
            id: array.steps.data[value].id,
            title: step.attributes.title,
            description: step.attributes.description,
            inputs: [...step.attributes.inputs]
        }
    }
}
