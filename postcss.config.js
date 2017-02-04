/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 version', 'ie >= 10'],
    }),
    require('postcss-nested')({}),
    require('postcss-simple-vars')({}),
  ],
};
