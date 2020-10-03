module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tyazhelovato/'
    : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 'postcss-css-variables',
        ],
      },
    },
  },
};
