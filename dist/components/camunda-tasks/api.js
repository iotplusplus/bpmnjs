"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ApiService {
    constructor(baseUrl, organizationId, accessToken) {
        this.client = axios_1.default.create({ baseURL: baseUrl });
        this.client.defaults.headers.common['Authorization'] = `${accessToken}`;
        this.client.defaults.headers.common['organizationId'] = organizationId;
    }
    get(url, config) {
        return this.client.get(url, config);
    }
    post(url, data, config) {
        return this.client.post(url, data, config);
    }
    put(url, data, config) {
        return this.client.put(url, data, config);
    }
    delete(url, config) {
        return this.client.delete(url, config);
    }
    options(url, config) {
        return this.client.options(url, config);
    }
}
exports.default = ApiService;
