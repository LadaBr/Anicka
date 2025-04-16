
export const bufferToHash = (bufferOrArray: ArrayBuffer | Uint8Array) => {
    return btoa(Array.from(new Uint8Array(bufferOrArray)).map(val => {
        return String.fromCharCode(val)
    }).join(''));
}

export const hashToBuffer = (hash: string) => {
    return new Uint8Array(atob(hash).split('').map(val => {
        return val.charCodeAt(0);
    }));
}

export const getPasswordKey = (password: string) => {
    const encodedPassword = new TextEncoder().encode(password);
    return crypto.subtle.importKey('raw', encodedPassword, {
        "name": "PBKDF2"
    }, false, ['deriveBits']);
}

const separator = '.';

export const mergeArrayToString = (items: unknown[]) => {
    return items.join(separator)
}

export const splitStringToArray = (message: string) => {
    return message.split(separator);
}

