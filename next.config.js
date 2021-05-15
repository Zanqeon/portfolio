const path = require('path')

module.exports = {
  cssModules: true,
  sassOptions: {
    includePaths: [ path.resolve(__dirname, './src') ],
    prependData: '@import "src/assets/scss/variables";'
  },
  images: {
    domains: [
      'a.storyblok.com',      // Storyblok images
      'img2.storyblok.com'    // Optimized storyblok images
    ],
    deviceSizes: [ 750, 1000, 1400, 1920, 2048 ],
  },
}
