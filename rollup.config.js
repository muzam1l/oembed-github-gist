import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
    {
        input: 'index.js',
        plugins: [
            terser(), // minify
        ],
        external: [],
        output: [
            {
                name: 'OembedGithubGist',
                file: pkg.main,
                format: 'umd',
                exports: 'auto',
            },
        ],
    },
];
