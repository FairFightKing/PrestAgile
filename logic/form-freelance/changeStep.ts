import Step from "./Step";
import Error from "next/error";

export interface StepGeneratorInterface {
    changeStep(value: number, array: Array<Object>): Step | Error;
}

export class StepGeneratorImplementation implements StepGeneratorInterface {
    changeStep = (value, array): Step | String => {
        if(array.Etapes[value] === undefined) throw new Error("error")
        return new Step(
            array.Etapes[value].id,
            array.Etapes[value].title,
            array.Etapes[value].input
        )
    }
}
