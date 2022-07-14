import axios, { AxiosResponse } from 'axios'
import { PopulationEnum } from '../../enum/Population'
import { getBackendUrl } from '../../../helpers/getBackendUrl'

export class HttpRequests {
  public static async getHttpRequest(
    app: string,
    url: string,
    populate?: PopulationEnum,
  ): Promise<AxiosResponse> {
    const completeUrl = `${getBackendUrl(app)}/api/${url}${
      populate ? '?populate=' + populate : ''
    }`
    return await axios.get(completeUrl)
  }

  public static async postHttpRequest(
    app: string,
    url: string,
    data,
  ): Promise<AxiosResponse> {
    const completeUrl = `${getBackendUrl(app)}/api/${url}`
    return await axios.post(completeUrl, data)
  }
}
