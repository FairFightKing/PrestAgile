import {Input} from "./Input";

export declare interface Step {
    _id: number,
    _title: string,
    _description: string,
    _inputs?: Array<Input>
}