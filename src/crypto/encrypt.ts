import {bufferToHash, getPasswordKey, mergeArrayToString} from './crypto';

export const encrypt = async (text: string, password: string, iterations = 500000) => {
    const rounds = iterations;
    const encodedText = new TextEncoder().encode(text);
    const passwordKey = await getPasswordKey(password);

    const salt = crypto.getRandomValues(new Uint8Array(32));
    const iv = crypto.getRandomValues(new Uint8Array(12));

    const bits = await crypto.subtle.deriveBits({
        name: "PBKDF2",
        salt,
        iterations: rounds,
        hash: {
            name: "SHA-256"
        }
    }, passwordKey, 256);

    const key = await crypto.subtle.importKey('raw', bits, {
        name: "AES-GCM"
    }, false, ['encrypt']);

    const encryptedText = await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv,
    }, key, encodedText);

    const iterationsHash = btoa(rounds.toString());
    const hashes = [salt, iv, encryptedText].map(v => bufferToHash(v));
    return mergeArrayToString([iterationsHash, ...hashes])
}
