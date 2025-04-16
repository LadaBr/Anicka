import {processArgs} from "./crypto-cli-base";
import {decrypt} from "./crypto/decrypt";

await processArgs(process.argv, decrypt).then(v => console.log(v));
