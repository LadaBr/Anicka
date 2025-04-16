import {decrypt as decryptFn } from "./crypto/decrypt";


export const decryptFileFn = async (file: Blob, password: string) => {
    const content = await file.text();
    return decryptFn(content, password);
}

export const decryptFileFromUrlFn = async (url: string | URL, password: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return decryptFileFn(blob, password);
}

export const decryptAllFilesFromUrlsFn = async (urls: (string | URL)[], password: string) => {
    const allFiles = await decryptFilesFromUrlsFn(urls, password);
    for (const file of allFiles) {
        if (file instanceof Error) {
            throw file;
        }
    }
    return allFiles;
}

export const validatePasswordForUrlsFn = async (urls: (string | URL)[], password: string) => {
    const allFiles = await decryptFilesFromUrlsFn(urls, password);
    return allFiles.some(v => typeof v === 'string');
}

export const validatePasswordFn = async (message: string, password: string) => {
    return decryptFn(message, password).then(Boolean).catch(() => false);
}

export const decryptFilesFromUrlsFn = async (urls: (string | URL)[], password: string): Promise<(string | Error)[]> => {
    return Promise.all(urls.map(v => decryptFileFromUrlFn(v, password).catch(v => v)));
}

export const decryptFileFromUrlsFn = async (urls: (string | URL)[], password: string): Promise<string | undefined> => {
    const allFiles = await decryptFilesFromUrlsFn(urls, password);
    return allFiles.find(v => typeof v === 'string') as string | undefined;
}

export declare module globalThis {
    let decryptFile: typeof decryptFileFn;
    let decrypt: typeof decryptFn;
    let decryptFileFromUrl: typeof decryptFileFromUrlFn;
    let decryptFilesFromUrls: typeof decryptFilesFromUrlsFn;
    let decryptAllFilesFromUrls: typeof decryptAllFilesFromUrlsFn;
    let validatePasswordForUrls: typeof validatePasswordForUrlsFn;
    let validatePassword: typeof validatePasswordFn;
    let decryptFileFromUrls: typeof decryptFileFromUrlsFn;
}

globalThis.decrypt = decryptFn;
globalThis.decryptFile = decryptFileFn;
globalThis.decryptFileFromUrl = decryptFileFromUrlFn;
globalThis.decryptFilesFromUrls = decryptFilesFromUrlsFn;
globalThis.decryptAllFilesFromUrls = decryptAllFilesFromUrlsFn;
globalThis.validatePasswordForUrls = validatePasswordForUrlsFn;
globalThis.validatePassword = validatePasswordFn;
globalThis.decryptFileFromUrls = decryptFileFromUrlsFn;
