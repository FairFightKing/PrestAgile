import {Step} from "../interfaces/Step";

export interface StepGeneratorInterface {
    changeStep(value: number, array: Array<Object>): Step | Error;
}

export class StepGeneratorImplementation implements StepGeneratorInterface {
    changeStep = (value, array): Step => {
        if(array.Etapes[value].id === undefined) throw new Error("error")
        let step = array.Etapes[value]
        return {
            _id: step.id,
            _title: step.title,
            _description: step._description,
            _inputs: [...step.input]
        }
    }
}
