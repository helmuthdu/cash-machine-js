module.exports = wallaby => ({
  files: [
    'config/**',
    { pattern: './src/**/*.js', load: false }
  ],

  tests: [
    './test/**/*.spec.js'
  ],

  env: {
    type: 'node'
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel({})
  },

  hints: {
    ignoreCoverage: /ignore coverage/
  }
})
