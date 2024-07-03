import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'index.js',
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
          includePaths: ['./src/styles', './node_modules']
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