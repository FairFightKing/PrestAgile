import {Form} from "../interfaces/Form";
import axios from "axios";

export interface HttpClient {
    getForm(): Promise<Form>
}

const fakeData = {
    id: 1,
    title: "Formulaire freelance",
    description: "Description form",
    published_at: "2021-12-24T00:09:20.500Z",
    created_at: "2021-12-22T14:57:38.523Z",
    updated_at: "2021-12-24T00:14:13.062Z",
    steps: [
        {
            id: 5,
            title: "step 1",
            description: "description",
            inputs: [
                {
                    id: 7,
                    name: "text",
                    information: "information",
                    additionnalData: null,
                    type: "text",
                    multipleChoice: false
                },
                {
                    id: 8,
                    name: "text",
                    information: "information",
                    additionnalData: null,
                    type: "select",
                    multipleChoice: false
                }
            ]
        },
        {
            id: 6,
            title: "Etape 2",
            description: "description",
            inputs: [
                {
                    id: 9,
                    name: "text",
                    information: "information",
                    additionnalData: null,
                    type: "text",
                    multipleChoice: false
                }
            ]
        }
    ]
}

export default class HttpClientImplementation implements HttpClient {
    getForm = async (): Promise<Form> => {
        const response = await axios("http://localhost:1337/formulaire-freelance")
        return await response.data;
    }
}