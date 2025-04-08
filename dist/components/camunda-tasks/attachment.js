"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskAttachment = addTaskAttachment;
const axios_1 = __importDefault(require("axios"));
function addTaskAttachment(_a) {
    return __awaiter(this, arguments, void 0, function* ({ url, payload, }) {
        // console.log({url, payload});
        var _b;
        const formData = new FormData();
        formData.append('attachment-name', payload['attachment-name']);
        formData.append('attachment-description', payload['attachment-description']);
        formData.append('attachment-type', payload['attachment-type']);
        formData.append('url', payload.url);
        if (payload === null || payload === void 0 ? void 0 : payload.content) {
            formData.append('content', payload.content);
        }
        // Headers configuration
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        try {
            const response = yield axios_1.default.post(`${url}`, formData, config);
            // console.log('Attachment added successfully:', response.data);
            return response.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error('Error adding task attachment:', error.message);
                console.error('Response Data:', (_b = error.response) === null || _b === void 0 ? void 0 : _b.data);
            }
            else {
                console.error('Unexpected error:', error);
            }
            throw error;
        }
    });
}
