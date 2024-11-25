import axios from "axios";

interface ApiConfig {
    baseUrl: string;
    url: string;
    engineName?: string;
    user?: string;
    cookie?: string;
    data?: any;
}

export const getCamudaApi = async ({
    baseUrl,
    url,
    engineName = "default",
    user = "demo",
    cookie,
}: ApiConfig) => {
    const config = {
        headers: {
            ...(cookie && { Cookie: cookie }),
            "x-authorized-apps": "admin,tasklist,welcome,cockpit",
            "x-authorized-engine": engineName,
            "x-authorized-user": user,
        },
    };

    try {
        const response = await axios.get(`${baseUrl}${url}`, config);
        console.log("GET Response Data:", response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("GET request failed:", error.message);
            console.error("Response Data:", error.response?.data);
        } else {
            console.error("GET request failed:", error);
        }
        throw error;
    }
};

export const postCamudaApi = async ({
    baseUrl,
    url,
    engineName = "default",
    user = "demo",
    data = {},
    cookie,
}: ApiConfig) => {
    const config = {
        headers: {
            ...(cookie && { Cookie: cookie }),
            "x-authorized-apps": "admin,tasklist,welcome,cockpit",
            "x-authorized-engine": engineName,
            "x-authorized-user": user,
        },
    };

    try {
        const response = await axios.post(`${baseUrl}${url}`, data, config);
        console.log("POST Response Data:", response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("POST request failed:", error.message);
            console.error("Response Data:", error.response?.data);
        } else {
            console.error("POST request failed:", error);
        }
        throw error;
    }
};

export async function addTaskAttachment({
    baseUrl,
    url,
    engineName,
    user,
    cookie,
    payload,
}: {
    baseUrl: string;
    url: string;
    engineName?: string;
    user?: string;
    cookie?: any;
    payload: any;
}) {
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('description', payload.description);
    formData.append('type', payload.type);
    formData.append('url', payload.url);

    // Headers configuration
    const config = {
        headers: {
            ...(cookie && { Cookie: cookie }),
            'Content-Type': 'multipart/form-data',
            'x-authorized-apps': 'admin,tasklist,welcome,cockpit',
            'x-authorized-engine': engineName,
            'x-authorized-user': user,
        },
    };

    try {
        const response = await axios.post(
            `${baseUrl}${url}`,
            formData,
            config,
        );
        console.log('Attachment added successfully:', response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error adding task attachment:', error.message);
            console.error('Response Data:', error.response?.data);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}