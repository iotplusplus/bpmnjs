import axios from 'axios';
import { CreateTaskAttachmentPayload } from './types';

export async function addTaskAttachment({
    url,
    payload,
}: {
    url: string;
    payload: CreateTaskAttachmentPayload;
}) {
    // console.log({url, payload});
    
    const formData = new FormData();
    formData.append('attachment-name', payload['attachment-name']);
    formData.append('attachment-description', payload['attachment-description']);
    formData.append('attachment-type', payload['attachment-type']);
    formData.append('url', payload.url);
    if(payload?.content){
        formData.append('content', payload.content);
    }

    // Headers configuration
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    try {
        const response = await axios.post(
            `${url}`,
            formData,
            config,
        );
        // console.log('Attachment added successfully:', response.data);
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