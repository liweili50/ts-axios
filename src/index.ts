import { AxiosRequestConfig } from './types'
import xhr from './xhr'

export function axios(config: AxiosRequestConfig) {
  xhr(config)
}
