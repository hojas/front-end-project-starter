import { App } from 'vue'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export interface CustomResponse<T = unknown, D = unknown>
  extends AxiosResponse<T, D> {
  ok: boolean
  message?: string
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 30000,
  withCredentials: true,
})

instance.interceptors.response.use(
  (response: AxiosResponse): CustomResponse => ({
    ...response,
    ok: true,
  }),
  async (error: AxiosError<Record<string, unknown>>) => {
    const defaultMsg = '请求失败，请稍后再试'
    const { data = {} } = error.response as CustomResponse<
      Record<string, unknown>
    >
    const message = data.message || defaultMsg

    return {
      ...error.response,
      ok: false,
      message,
    }
  }
)

const customInstance = {
  get: <T = unknown, R = CustomResponse<T>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => instance.get(url, config),

  post: <T = unknown, R = CustomResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => instance.post(url, data, config),

  put: <T = unknown, R = CustomResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => instance.put(url, data, config),

  delete: <T = unknown, R = CustomResponse<T>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => instance.delete(url, config),
}

export default {
  install(app: App) {
    app.config.globalProperties.$axios = customInstance
  },
}
