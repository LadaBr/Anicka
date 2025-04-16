import {parseArgs} from "./utils/process";
import * as fs from "node:fs";

type EncryptArguments = 'message' | 'password' | 'file'


export const processArgs = async (args: string[], callback: (message: string, password: string) => Promise<string>) => {
    const {message, password, file} = parseArgs<EncryptArguments>(...args);
    if (!message || !password) {
        throw new Error("Missing required argument --message or --password");
    }
    const encrypted = await callback(message, password);

    if (file && file !== 'false') {
        const filePath = file === 'true' ? crypto.randomUUID() : file;
        fs.writeFileSync(filePath, encrypted)
    }
    return encrypted;
}
