import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: 'src/StringDiffHighlighter.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    postcss({
      extensions: ['.scss'],
      extract: false,
      minimize: true,
      use: [
        ['sass', {
          includePaths: [path.resolve(__dirname, 'src/styles'), 'node_modules']
        }]
      ]
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-syntax-jsx'],
      babelHelpers: 'bundled'
    })
  ],
  external: ['react']
};