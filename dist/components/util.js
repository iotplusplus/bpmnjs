"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = generateRandomString;
function generateRandomString() {
    const characters = '0123456789ABCDEF'; // Hexadecimal characters
    let randomString = '';
    for (let i = 0; i < 32; i++) {
        randomString += characters[Math.floor(Math.random() * characters.length)];
    }
    return randomString.toUpperCase();
}
