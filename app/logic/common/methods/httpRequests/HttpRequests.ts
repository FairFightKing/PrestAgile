import axios, {AxiosResponse} from "axios";
import {PopulationEnum} from "../../enum/Population";

export class HttpRequests {
    public static async getHttpRequest(url: string, populate?: PopulationEnum): Promise<AxiosResponse> {
        const completeUrl = `${process.env.STRAPI_URL}/api/${url}${populate ? "?populate=" + populate : ""}`
        let response = await axios.get(completeUrl).then(res => res)
        return response
    }
}