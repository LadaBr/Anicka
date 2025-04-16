import {build} from "esbuild";
import {configNode, configBrowser} from "./esbuild.config.mjs";


await Promise.all([
    await build(configBrowser),
    await build(configNode),
])
