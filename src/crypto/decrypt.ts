import {hashToBuffer, splitStringToArray} from "./crypto";

export const decrypt = async (str: string, password: string) => {
    const [rounds, saltEncoded, ivEncoded, encryptedTextEncoded] = splitStringToArray(str);
    const iterations = parseInt(atob(rounds));
    const [salt, iv, encryptedText] = [saltEncoded, ivEncoded, encryptedTextEncoded].map(v => hashToBuffer(v));
    const pass = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), {
        name: "PBKDF2"
    }, false, ['deriveBits']);

    const bits = await crypto.subtle.deriveBits({
        name: "PBKDF2",
        salt,
        iterations,
        hash: {
            name: "SHA-256"
        }
    }, pass, 256);

    const key = await crypto.subtle.importKey('raw', bits, {
        name: "AES-GCM"
    }, false, ['decrypt']);

    const dec = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv
    }, key, encryptedText);
    return new TextDecoder().decode(dec);
}
