import {Form} from "../interfaces/Form";
import axios from "axios";

export interface HttpClient {
    getForm(url : string): Promise<Form>
}

export default class HttpClientImplementation implements HttpClient {
    //TODO need to implement env variables in url base fetching
    getForm = async (url : string): Promise<Form> => {
        let response = await axios(url)
        if (response.status === 404) throw new Error("The url doesn't exist")
        return response.data
    }
}