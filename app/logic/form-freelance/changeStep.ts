import Step from "./Step";

export interface StepGeneratorInterface {
    changeStep(value: number, array: Array<Object>): Step;
}

export class StepGeneratorImplementation implements StepGeneratorInterface {
    changeStep(value, array): Step {
        return new Step(array.Etapes[value].id, array.Etapes[value].title, array.Etapes[value].input)
    }
}


