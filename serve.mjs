import {context} from "esbuild";
import {config} from "./esbuild.config.mjs";

(async function(){
    try {
        const ctx = await context(config);
        let { host, port } = await ctx.serve({
            servedir: 'dist',
        })
    } catch (error) {
        process.exit(1)
    }
})();
