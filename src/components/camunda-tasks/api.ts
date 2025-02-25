import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private client: AxiosInstance;

  constructor(baseUrl: string, organizationId: string, accessToken: string) {
    this.client = axios.create({ baseURL: baseUrl });

    this.client.defaults.headers.common['Authorization'] = `${accessToken}`;
    this.client.defaults.headers.common['organizationId'] = organizationId;
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }

  public post<T, R>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.client.post<R>(url, data, config);
  }

  public put<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.client.put<R>(url, data, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config);
  }

  public options<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.options<T>(url, config);
  }
}

export default ApiService;
