module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
  basePath:'/Portfolio',
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  
}

