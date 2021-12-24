import {Input} from "./Input";

export declare interface Step {
    id: number,
    title: string,
    description: string,
    inputs: Array<Input>
}