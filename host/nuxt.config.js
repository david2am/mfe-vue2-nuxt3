import federation from "@originjs/vite-plugin-federation";

const remoteUrl = 'http://localhost:5000'

export default defineNuxtConfig({
    ssr: false, // doesn't work with this in true by default
    app: {
        head: {
            title: 'Nuxt App',
            charset: "utf-16"
        },
    },
    vite: {
      plugins: [
        federation({
          name: "host",
          remotes: {
            remote: `${remoteUrl}/assets/remoteEntry.js`,
          },
        }),
      ]
    }
});