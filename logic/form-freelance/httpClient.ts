import Form from "./Form";
import Step from "./Step";
import {Input} from "./Input";


const steps =

export interface HttpClient {
    getForm(): Form
}

export default class HttpClientImplementation implements HttpClient {
    getForm = (): Form => {
        const input: Input = {
            _information: "information",
            _name: "name",
            _type: "type"
        }
    }
}