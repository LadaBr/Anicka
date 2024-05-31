/**
 * @type {import('esbuild').BuildOptions}
 */
export const config = {
    entryPoints: ['src/anicka.ts'],
    outdir: 'dist',
    minify: true,
    sourcemap: true,
    // entryNames: '[dir]/[name].[hash].[ext]',
    platform: 'browser',
    keepNames: false,
    assetNames: '[name].[hash].[ext]',
    bundle: true
}
