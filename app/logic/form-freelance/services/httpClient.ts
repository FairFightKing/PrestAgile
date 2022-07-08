import { Form } from '../interfaces/Form'
import axios from 'axios'

export interface HttpClient {
  getForm(url: string): Promise<Form>
}

export default class HttpClientImplementation implements HttpClient {
  getForm = async (url: string): Promise<Form> => {
    let response = await axios(process.env.BO_URL + url)
    if (response.status === 404) throw new Error("The url doesn't exist")
    return response.data
  }
}
