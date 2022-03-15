module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/logIn',
        permanent: true,
      },
    ]
  },
}
