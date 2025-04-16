/**
 * @type {import('esbuild').BuildOptions}
 */
export const configBrowser = {
    entryPoints: ['src/anicka.ts', 'src/decrypt-browser.ts'],
    outdir: 'dist',
    minify: true,
    sourcemap: true,
    platform: 'browser',
    keepNames: false,
    assetNames: '[name].[hash].[ext]',
    bundle: true
}

/**
 * @type {import('esbuild').BuildOptions}
 */
export const configNode = {
    entryPoints: ['src/encrypt.ts', 'src/decrypt.ts'],
    outdir: 'dist',
    minify: true,
    sourcemap: false,
    format: "esm",
    platform: 'node',
    keepNames: false,
    assetNames: '[name].[hash].[ext]',
    bundle: true
}
