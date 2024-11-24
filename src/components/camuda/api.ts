import axios from "axios";

export const getCamudaApi = async ({
    baseUrl,
    url,
    cookie,
}: {
    baseUrl: string, url: string, cookie?: string
}) => {
    const config = {
        headers: cookie ? { Cookie: cookie } : undefined,
        "x-authorized-apps": "admin,tasklist,welcome,cockpit",
        "x-authorized-engine": "default",
        "x-authorized-user": "demo",
    };
    try {
        const response = await axios.get(`${baseUrl}${url}`, config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("GET request failed:", error.message);
        } else {
            console.error("GET request failed:", error);
        }
        throw error;
    }
};

export const postCamudaApi = async ({
    baseUrl,
    url,
    data,
    cookie,
}: {
    baseUrl: string,
    url: string,
    data: any,
    cookie?: string
}) => {
    const config = {
        headers: cookie ? { Cookie: cookie } : undefined,
        "x-authorized-apps": "admin,tasklist,welcome,cockpit",
        "x-authorized-engine": "default",
        "x-authorized-user": "demo",
    };
    try {
        const response = await axios.post(`${baseUrl}${url}`, data, config);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("POST request failed:", error.message);
        } else {
            console.error("POST request failed:", error);
        }
        throw error;
    }
};
