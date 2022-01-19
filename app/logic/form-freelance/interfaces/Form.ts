import {Step} from "./Step";

export declare interface Form {
    id: number
    title: string,
    description?: string | null,
    published_at: string
    created_at: string
    updated_at: string
    steps: Array<Step>
}