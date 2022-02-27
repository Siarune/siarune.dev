module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        process: false,
        path: false,
        assert: false,
        buffer: false,
        child_process: false,
        crypto: false,
        os: false,
        tty: false,
        util: false,
      }
    }

    return config;
  }
}
