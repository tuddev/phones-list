import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { loginStore } from '../services';

export enum HttpCodes {
  UNAUTHORIZED = 401,
}

const BACKEND_URL = 'http://localhost:3001';

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (HttpCodes.UNAUTHORIZED === error?.response?.status) {
          loginStore.logout();
          throw new Error('Не авторизован');
        }

        return Promise.reject(error);
      },
    );
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = loginStore.token;
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
    const resultUrl = BACKEND_URL + url;

    return this.axiosInstance.get(resultUrl, { params });
  }

  async post(url: string, data: object) {
    const resultUrl = BACKEND_URL + url;

    try {
      const response = await this.axiosInstance.post(resultUrl, data);
      return response;
    } catch (error) {
      throw new Error(error.message ?? 'Что-то пошло не так');
    }
  }

  async delete(url: string, data: object) {
    const resultUrl = BACKEND_URL + url;

    try {
      return await this.axiosInstance.delete(resultUrl, data);
    } catch (error) {
      throw new Error(error.message ?? 'Что-то пошло не так');
    }
  }

  async put(url: string, data: object) {
    const resultUrl = BACKEND_URL + url;

    try {
      return await this.axiosInstance.put(resultUrl, data);
    } catch (error) {
      throw new Error(error.message ?? 'Что-то пошло не так');
    }
  }
}

export const httpClient = new HttpClient();