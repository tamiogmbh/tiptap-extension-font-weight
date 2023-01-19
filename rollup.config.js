import esbuild from 'rollup-plugin-esbuild'

export default [
    {
      input: `src/index.ts`,
      plugins: [esbuild()],
      output: [
        {
          name: '@tiptap/extension-font-weight',
          file: `dist/tiptap-extension-font-weight.cjs`,
          format: 'cjs',
          sourcemap: true,
        },
        {
            name: '@tiptap/extension-font-weight',
            file: `dist/tiptap-extension-font-weight.umd.cjs`,
            format: 'umd',
            sourcemap: true,
          },
          {
            name: '@tiptap/extension-font-weight',
            file: `dist/tiptap-extension-font-weight.esm.js`,
            format: 'es',
            sourcemap: true,
          }
      ]
    }
  ]