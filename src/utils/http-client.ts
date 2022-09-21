import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export enum HttpCodes {
  UNAUTHORIZED = 401,
}

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (HttpCodes.UNAUTHORIZED === error?.response?.status) {
          throw new Error('Не авторизован');
        }

        return Promise.reject(error);
      },
    );
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token-ts');
        return {
          ...config,
          headers: {
            ...config.headers,
            ...(!!token && { Authorization: `Bearer ${token}` }),
          },
        };
      },
    );
  }

  updateCommonHeaders(headers: Record<string, string> = {}) {
    for (const header in headers) {
      axios.defaults.headers.common[header] = headers[header];
    }
  }

  get(url: string, data: object = {}) {
    const params = new URLSearchParams(Object.entries(data));
    const resultUrl = 'http://localhost:3001' + url;

    return this.axiosInstance.get(resultUrl, { params });
  }

  async post(url: string, data: object) {
    const resultUrl = 'http://localhost:3001' + url;

    try {
      const response = await this.axiosInstance.post(resultUrl, data);
      return response;
    } catch (error) {
      throw new Error(error.message ?? 'Что-то пошло не так');
    }
  }
}

export const httpClient = new HttpClient();