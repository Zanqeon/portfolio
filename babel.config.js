const fs = require('fs')

module.exports = {
  presets: [
    [
      '@touchtribe/babel-presets/web',
      {
        isDebug: false,
        corejs: 3
      }
    ],
    '@touchtribe/babel-presets/react',
    'next/babel'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: [ './' ],
        alias: fs.readdirSync(`${__dirname}/src/`).reduce((aliases, file) => {
          aliases[file] = `./src/${file}`
          return aliases
        }, {})
      }
    ]
  ]
}
