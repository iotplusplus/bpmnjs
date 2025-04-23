import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare class ApiService {
    private client;
    constructor(baseUrl: string, organizationId: string, accessToken: string);
    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    post<T, R>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
    put<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    options<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
export default ApiService;
