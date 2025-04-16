import {encrypt} from "./crypto/encrypt";
import {processArgs} from "./crypto-cli-base";

await processArgs(process.argv, encrypt).then(v => console.log(v));
